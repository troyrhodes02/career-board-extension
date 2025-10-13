console.log('Service Worker started');

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message === 'ping') {
    console.log("Received 'ping' from popup");
    sendResponse('pong');
  }
});
