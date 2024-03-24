// Retrieve the data passed from popup.js
const data = window.data;

// Process the results and display them in dynamic_result.html
const resultList = document.getElementById('resultList');

// Loop through each model in the data
for (let model in data) {
    const modelItem = document.createElement('li');
    if (model === 'Not Present') {
        modelItem.textContent = "Suggestions for Improving the User Interface:";
        const notPresentList = document.createElement('ul');
        // Loop through each feature in the not_present dictionary
        let count = 0;
        for (let feature in data[model]) {
            const featureItem = document.createElement('li');
            // featureItem.textContent = `${feature}: ${data[model][feature]}`;
            if (feature === 'Loading Indicator') {
                featureItem.textContent += " Consider improving the design of loading indicators to make them more noticeable and easily understood by users.";
            } else if (feature === 'Process flows') {
                featureItem.textContent += " Ensure that the user interface reflects the logical flow of tasks, making it easier for users to understand and navigate.";
            } else if (feature === 'Back' || feature === 'Cancel' || feature === 'Close' || feature === 'Undo') {
                count++;
            } else if (feature === 'External Consistency') {
                featureItem.textContent += " Maintain consistency in the layout and behavior of form elements throughout the application to ensure external consistency.";
            } else if (feature === 'Skeuomorphic web design') {
                featureItem.textContent += " Ensure that design elements and interactions adhere to established standards across the application.";
            } else if (feature === 'Search Suggestions') {
                featureItem.textContent += " Improve the visibility and usability of search suggestions to help users avoid errors in their search queries.";
            } else if (feature === 'Confirmation Prompts') {
                featureItem.textContent += " Ensure that confirmation prompts are clear and provide enough information for users to make informed decisions.";
            } else if (feature === 'Form Validation') {
                featureItem.textContent += " Provide real-time feedback to users through form validation to prevent errors before they occur.";
            } else if (feature === 'Tooltips') {
                featureItem.textContent += " Use tooltips judiciously to provide additional information without overwhelming the user.";
            } else if (feature === 'messy') {
                featureItem.textContent += " Simplify the layout, remove clutter, and improve the visual hierarchy to create a more pleasing aesthetic.";
            } else if (feature === 'Invalid Input') {
                featureItem.textContent += " Provide clear feedback on how to correct errors and prevent them from recurring for invalid inputs.";
            } else if (feature === 'Error-msg') {
                featureItem.textContent += " Ensure that error messages are informative, actionable, and help users understand the problem and how to fix it.";
            }
            if (count>=2) {
                count = 0;
                featureItem.textContent += " To enhance user control and freedom, consider adding more back, cancel, undo, and close buttons.";
            }
            notPresentList.appendChild(featureItem);
        }
        modelItem.appendChild(notPresentList);
    }
    //  else if (model === 'H1' || model === 'H2' || model === 'H3' || model === 'H4' || model === 'H5' || model === 'H6' || model === 'H8' || model === 'H9' ) {
    //     // Create a bar graph for models 'H1' and 'H2' only
    //     const bar = document.createElement('div');
    //     bar.classList.add('bar');
    //     bar.style.width = `${data[model]}%`;

    //     // Create a span element for the text content
    //     const textSpan = document.createElement('span');
    //     textSpan.textContent = `${model}: `;

    //     // Append the text span and the bar to the modelItem
    //     modelItem.appendChild(textSpan);
    //     modelItem.appendChild(bar);
    // } else {
    //     // Display the model and its score without a bar graph
    //     modelItem.textContent = `${model}: ${data[model]}%`;
    // }
    // resultList.appendChild(modelItem); // Append the model item to the result list
    // resultList.appendChild(document.createElement('br')); // Add a line break
}

// Define the mapping of models to heuristic names
const heuristicNames = {
    'H1': 'Visibility of System Status',
    'H2': 'Match between system and real world',
    'H3': 'User control and freedom',
    'H4': 'Consistency and standards',
    'H5': 'Error prevention',
    'H6': 'Recognition rather than recall',
    'H8': 'Aesthetic and minimalist design',
    'H9': 'Error Diagnosis and Recovery'
};

// Update the bar graph for each model
for (let model in data) {
    if (heuristicNames[model]) {
        // Find the corresponding row based on the heuristic name
        let row;
        document.querySelectorAll('.row h2').forEach(h2 => {
            if (h2.textContent.trim() === heuristicNames[model]) {
                row = h2.parentNode.parentNode;
            }
        });

        // Find the bar-inner element in the row and update its data-percent attribute
        if (row) {
            const barInner = row.querySelector('.bar-inner');
            barInner.dataset.percent = `${data[model]}%`;
        }
    }
}

(function(document) {
    var _bars = [].slice.call(document.querySelectorAll('.bar-inner'));
    _bars.map(function(bar, index) {
      setTimeout(function() {
          bar.style.width = bar.dataset.percent;
      }, index * 1000);
      
    });
  })(document)