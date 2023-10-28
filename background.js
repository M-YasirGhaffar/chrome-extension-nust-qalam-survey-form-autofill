// Calculate a random delay between 1 to 3 seconds
const delay = Math.floor(Math.random() * (3000 - 1000) + 1000);

// Wait for the random delay
setTimeout(() => {
  // Send a message to content.js to trigger script execution
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      function: function () {
        // This code will be executed in content.js
        console.log("Content script executed after delay.");
        // Add your code here to interact with the page
      },
    });
  });
}, delay);
