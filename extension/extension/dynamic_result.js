// dynamic_result.js
document.addEventListener('DOMContentLoaded', function () {
    // Retrieve the dynamic results from the message sent by popup.js
    chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
        console.log("Message received from popup.js:", request); // Debugging statement to log the message received from popup.js
        if (request.action === 'displayDynamic') {
            const results = request.results;
            console.log('Dynamic Results:', results); // Debugging statement to log the dynamic results
            // Display the results in the HTML page
            const resultContainer = document.getElementById('result');
            for (const [route, result] of Object.entries(results)) {
                const resultItem = document.createElement('div');
                resultItem.textContent = `Route: ${route}, Result: ${result}`;
                resultContainer.appendChild(resultItem);
            }
        }
    });
});
