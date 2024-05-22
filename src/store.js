import { writable, readable } from 'svelte/store';
import { getDomains } from './const';
import { Socket } from './socket';

const domains = getDomains();

export const account = writable(null);
export const socketComm = writable(new Socket(domains.socket, false));
