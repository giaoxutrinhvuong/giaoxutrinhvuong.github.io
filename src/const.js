export const getDomains = () => {
  const hostname = window.location.hostname;
  let socket;
  let webDomain;
  const match = hostname.match(/[^.]+\.[^.]+$/);
  const topDomain = match ? match[0] : null;
  if (hostname.match('localserver.me')) {
    socket = `ws://localserver.me:3000`;
    webDomain = `http://localserver.me:5173`;
  } else if (hostname.match('localhost')) {
    socket = `ws://localhost:3000`;
    webDomain = `http://localhost:5173`;
  } else if (topDomain) {
    socket = `wss://socket.${topDomain}`;
    webDomain = `https://${hostname}`;
  }
  return { socket, webDomain };
};