chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
    switch (request.directive) {
      case "one":
      case "buttonTwo":
      case "buttonThree":
      case "buttonFour":
      case "buttonFive":
      case "buttonSix":
      case "buttonSeven":
      case "buttonEight":
      case "buttonNine":
        sendResponse({}); // sends back empty response
        break;
      default:
        alert("Unmatched request of ;" + request + "' from script to background.js from" + sender);
      }
    }
);

chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('window.html', {
    'bounds': {
      'width': 400,
      'height': 500 
    }
  });
})