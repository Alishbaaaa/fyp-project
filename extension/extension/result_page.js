document.addEventListener('DOMContentLoaded', function () {
    // Listen for messages from the background script
    chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
        if (request.action === 'displayResult') {
            // Parse the JSON result
            const resultArray = JSON.parse(request.result);

            // Display the title in an h1 or h2 tag
            const title = resultArray.find(result => result.startsWith('Title:'));
            if (title) {
                const titleContainer = document.createElement('h1');
                titleContainer.textContent = `Result Analysis: ${title.replace('Title: ', '')}`;
                document.getElementById('result').appendChild(titleContainer);
            }

            let usabilityScore = 0;
            let totalscore = 0;

            // Display the rest of the results with ticks and crosses
            resultArray.forEach(result => {
                if (!result.startsWith('Title:')) {
                    const resultItem = document.createElement('div');
                    
                    resultItem.style.fontSize = '16px'; // Adjust the font size as needed
                    resultItem.style.marginBottom = '5px'; // Add margin at the bottom for spacing

                    // Display the result with a tick or cross
                    const resultImage = document.createElement('img');
                    resultImage.src = result.includes('No') ? 'cross.png' : 'check.png';
                    resultImage.alt = result.includes('No') ? 'cross' : 'check';

                    // Update the usability score based on the result
                    usabilityScore += result.includes('No') ? 0 : 1;
                    totalscore++;
                    // Append the image and text content to the result item
                    resultItem.appendChild(document.createTextNode(result.replace(/(true|false)/, '').trim())); // Remove true/false from the result
                    // Append the image and text content to the result item
                    resultItem.appendChild(resultImage);

                    // Append the result item to the container
                    document.getElementById('result').appendChild(resultItem);
                }
            });
            let usabilitypercentage = (usabilityScore/totalscore)*100;
            // Display the usability score
            displayUsabilityScore(usabilitypercentage);
        }
    });
});

function displayUsabilityScore(score) {
    const resultContainer = document.getElementById('result');

    // Usability Score
    const scoreContainer = document.createElement('div');
    scoreContainer.classList.add('usability-score-container'); // Add a CSS class for styling

    const scoreText = document.createElement('span');
    scoreText.textContent = `Usability Score: `;
    scoreContainer.appendChild(scoreText);

    const scoreValue = document.createElement('span');
    scoreValue.textContent = `${score.toFixed(2)}%`; // Display the score with two decimal places and add '%'
    scoreValue.classList.add(score >= 0 ? 'positive-score' : 'negative-score'); // Add class based on positive or negative score
    scoreContainer.appendChild(scoreValue);

    resultContainer.appendChild(scoreContainer);

    const progressBar = document.createElement('progress');
    progressBar.id = 'file';
    progressBar.value = score; // Use the score directly as the progress value
    progressBar.max = 100;
    progressBar.style.width = '50%'; // Set the width
    progressBar.style.height = '20px'; // Set the height
    progressBar.style.padding = '5px'; // Set padding
    progressBar.style.backgroundColor = score >= 50 ? 'green' : 'red'; // Set color
    progressBar.textContent = `${score.toFixed(2)}%`;
    resultContainer.appendChild(progressBar);
}

// Example data for the report (replace this with your actual report data)
const reportData = "Your report content goes here.";

document.getElementById("downloadButton").addEventListener("click", function() {
    // Create a Blob with the report data
    const blob = new Blob([reportData], { type: "text/plain" });

    // Create a link element to trigger the download
    const downloadLink = document.createElement("a");
    downloadLink.href = URL.createObjectURL(blob);

    // Set the filename for the download
    downloadLink.download = "report.txt";

    // Append the link to the document and trigger the click event
    document.body.appendChild(downloadLink);
    downloadLink.click();

    // Remove the link from the document
    document.body.removeChild(downloadLink);
});
