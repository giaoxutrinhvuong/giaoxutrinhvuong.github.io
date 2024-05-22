import { get } from 'svelte/store';
import { account } from './store';

export class Socket {
  constructor(address, authable) {
    this.address = address;
    this.authable = authable;
    this.socket = null;
    this.connected = false;
    this.authed = false;
    this.authSent = false;
    this.backoff = 100;
  }

  connect(callback) {
    if (!this.connected) {
      this.socket = new WebSocket(`${this.address}/`);
      console.log('Connecting to', this.address);
      this.socket.onopen = () => {
        this.connected = true;
        console.log('Connected to', this.address);
        this.backoff = 100;
        this.auth();
        if (callback) {
          callback();
        }
      };

      this.socket.addEventListener('message', (event) => {
        try {
          const message = JSON.parse(event.data);
          if (message.Auth) {
            if (message.Auth.success) {
              console.log('Authenticated', this.address);
              this.authed = true;
            }
          }
        } catch (err) {
          console.log('Error parsing message from socket', err);
        }
      });

      this.socket.onerror = (event) => {
        console.log('Socket error', event);
      };
  
      this.socket.onclose = (event) => {
        console.log('Socket closed', event);
        this.connected = false;
        this.authSent = false;
        this.authed = false;
        setTimeout(() => { this.connect(callback) }, this.backoff);
        this.backoff *= 2;
      };
    }
  }
  auth() {
    const acc = get(account);
    if (this.connected && this.authable && !this.authSent && !this.authed && acc) {
      this.authSent = true;
      this.socket.send(JSON.stringify({ Auth: { user_id: acc.id, websocket_key: acc.websocket_key } }));
    }
  }
  listener(onDestroy, messageCallback) {
    const controller = new AbortController();
    this.socket.addEventListener('message', (event) => {
      try {
        const message = JSON.parse(event.data);
        messageCallback(message);
      } catch (err) {
      }
    }, { signal: controller.signal });
    onDestroy(() => {
      controller.abort();
    });
  }
}