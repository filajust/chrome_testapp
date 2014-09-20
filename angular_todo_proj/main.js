chrome.app.runtime.onLaunched.addListener(function() {
    chrome.app.window.create('AngularJsIndex.html', {
        bounds: {
            width: 500,
            height: 309
        }
    });
});