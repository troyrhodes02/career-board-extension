console.log('Popup loaded');

document.addEventListener('DOMContentLoaded', () => {
  chrome.runtime.sendMessage('ping', (response) => {
    console.log('Received from background:', response);
  });
});
