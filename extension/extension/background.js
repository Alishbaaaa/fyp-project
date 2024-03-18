// // background.js
// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//     if (request.action === 'extractUrl') {
//         chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//             var url = tabs[0].url;
//             console.log('Current URL:', url);

//             // Send a POST request to your Flask server
//             fetch('http://localhost:5000/extract', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ url: url }),
//             })
//                 .then(response => response.json())
//                 .then(data => {
//                     console.log('Server response:', data.result);

//                     // Open a new tab with the extension's HTML page to display the result
//                     chrome.tabs.create({
//                         url: chrome.runtime.getURL('result_page.html'),
//                     }, function (newTab) {
//                         // Introduce a delay before sending the message
//                         setTimeout(function () {
//                             // Send the result to the newly created tab
//                             chrome.tabs.sendMessage(newTab.id, { action: 'displayResult', result: data.result });
//                         }, 2000); // Adjust the delay as needed
//                     });
//                 })
//                 .catch(error => console.error('Error:', error));
//         });
//     }
// });
//background.js
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === 'extractUrl') {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            var url = tabs[0].url;
            console.log('Current URL:', url);

            // Send a POST request to your Flask server to extract the URL
            fetch('http://localhost:5000/extract', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ url: url }),
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Server response:', data.result);

                    // Open a new tab with the extension's HTML page to display the result
                    chrome.tabs.create({
                        url: chrome.runtime.getURL('result_page.html'),
                    }, function (newTab) {
                        // Introduce a delay before sending the message
                        setTimeout(function () {
                            // Send the result to the newly created tab
                            chrome.tabs.sendMessage(newTab.id, { action: 'displayResult', result: data.result });
                        }, 2000); // Adjust the delay as needed
                    });
                })
                .catch(error => console.error('Error:', error));
        });
    } 
});
