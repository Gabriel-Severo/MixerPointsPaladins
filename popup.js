document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('link');
    link.addEventListener('click', function() {
        // chrome.runtime.getBackgroundPage((window) => {
        //     console.log(window)
        // })
        // chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        //     chrome.tabs.sendMessage(tabs[0].id, {mensagem: "ola"});
        // });
        
        // chrome.tabs.query({}, (tabs) => {
        //     for(tab of tabs){
        //         chrome.tabs.sendMessage(tab.id, {message: 'click', test: 'test'});
        //     }
        // })
        let port = chrome.extension.connect();
        port.postMessage("Hi BackGround");
        port.onMessage.addListener(function(msg) {
            console.log("message recieved" + msg);
        });
    });
});