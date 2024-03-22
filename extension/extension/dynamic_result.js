// Retrieve the data passed from popup.js
const data = window.data;

// Process the results and display them in dynamic_result.html
const resultList = document.getElementById('resultList');

// Loop through each model in the data
for (let model in data) {
    const modelItem = document.createElement('li');
    modelItem.textContent = `${model}: ${data[model]}%`; // Display the model and its rating
    resultList.appendChild(modelItem); // Append the model item to the result list
    resultList.appendChild(document.createElement('br')); // Add a line break
}

// // Display overall score
// const overallScore = document.createElement('li');
// overallScore.textContent = `Overall Score: ${data.overall_score}%`; // Display the overall score
// resultList.appendChild(overallScore); // Append the overall score item to the result list
