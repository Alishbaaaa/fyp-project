// Retrieve the data passed from popup.js
const data = window.data;

// Print the evaluation result on the terminal/console
console.log("Evaluation Result:");
console.log(data['Evaluation_Result']);

const suggestions = document.querySelector('.box1-value');
suggestions.innerHTML = ''; // Clear existing content
let count = 0; // Initialize count variable
data['Not Present'].forEach((feature, index) => {
  const suggestionItem = document.createElement('li'); // Changed ol to li as it seems more appropriate for a list item
  suggestionItem.textContent = (index + 1) + '. ';

  // Add suggestions based on feature
  if (feature === 'Loading Indicator') {
    suggestionItem.textContent = "Consider improving the design of loading indicators to make them more noticeable and easily understood by users.";
    // Create an image element for the hover effect
    const hoverImage = document.createElement('img');
    hoverImage.src = 'loadingindicator.png'; // Replace with your image URL
    hoverImage.classList.add('hover-image');
    hoverImage.style.display = 'none'; // Initially hide the image

    // Append the hover image to the suggestion item
    suggestionItem.appendChild(hoverImage);

    // Add event listener for mouseover to show the hover image
    suggestionItem.addEventListener('mouseover', () => {
      hoverImage.style.display = 'block';
    });

    // Add event listener for mouseout to hide the hover image
    suggestionItem.addEventListener('mouseout', () => {
      hoverImage.style.display = 'none';
    });

    
    
  } else if (feature === 'Process flows') {
    suggestionItem.textContent += "Ensure that the user interface reflects the logical flow of tasks, making it easier for users to understand and navigate.";
    // Create an image element for the hover effect
    const hoverImage = document.createElement('img');
    hoverImage.src = 'processflows.png'; // Replace with your image URL
    hoverImage.classList.add('hover-image');
    hoverImage.style.display = 'none'; // Initially hide the image

    // Append the hover image to the suggestion item
    suggestionItem.appendChild(hoverImage);

    // Add event listener for mouseover to show the hover image
    suggestionItem.addEventListener('mouseover', () => {
      hoverImage.style.display = 'block';
    });

    // Add event listener for mouseout to hide the hover image
    suggestionItem.addEventListener('mouseout', () => {
      hoverImage.style.display = 'none';
    });
  } else if ((feature === 'Back' || feature === 'Cancel' || feature === 'Close' || feature === 'Undo') && count === 0) {
    count++;
    suggestionItem.textContent += "To enhance user control and freedom, consider adding more back, cancel, undo, and close buttons.";
    // Create an image element for the hover effect
    const hoverImage = document.createElement('img');
    hoverImage.src = 'button.png'; // Replace with your image URL
    hoverImage.classList.add('hover-image');
    hoverImage.style.display = 'none'; // Initially hide the image

    // Append the hover image to the suggestion item
    suggestionItem.appendChild(hoverImage);

    // Add event listener for mouseover to show the hover image
    suggestionItem.addEventListener('mouseover', () => {
      hoverImage.style.display = 'block';
    });

    // Add event listener for mouseout to hide the hover image
    suggestionItem.addEventListener('mouseout', () => {
      hoverImage.style.display = 'none';
    });
  } else if (feature === 'External Consistency') {
    suggestionItem.textContent += "Maintain consistency in the layout and behavior of form elements throughout the application to ensure external consistency.";
    // Create an image element for the hover effect
    const hoverImage = document.createElement('img');
    hoverImage.src = 'externalconsistency.png'; // Replace with your image URL
    hoverImage.classList.add('hover-image');
    hoverImage.style.display = 'none'; // Initially hide the image

    // Append the hover image to the suggestion item
    suggestionItem.appendChild(hoverImage);

    // Add event listener for mouseover to show the hover image
    suggestionItem.addEventListener('mouseover', () => {
      hoverImage.style.display = 'block';
    });

    // Add event listener for mouseout to hide the hover image
    suggestionItem.addEventListener('mouseout', () => {
      hoverImage.style.display = 'none';
    });
  } else if (feature === 'Skeuomorphic web design') {
    suggestionItem.textContent += "Ensure that design elements and interactions adhere to established standards across the application.";
    // Create an image element for the hover effect
    const hoverImage = document.createElement('img');
    hoverImage.src = 'skeuomorphicwebdesign.png'; // Replace with your image URL
    hoverImage.classList.add('hover-image');
    hoverImage.style.display = 'none'; // Initially hide the image

    // Append the hover image to the suggestion item
    suggestionItem.appendChild(hoverImage);

    // Add event listener for mouseover to show the hover image
    suggestionItem.addEventListener('mouseover', () => {
      hoverImage.style.display = 'block';
    });

    // Add event listener for mouseout to hide the hover image
    suggestionItem.addEventListener('mouseout', () => {
      hoverImage.style.display = 'none';
    });
  } else if (feature === 'Search Suggestions') {
    suggestionItem.textContent += "Improve the visibility and usability of search suggestions to help users avoid errors in their search queries.";
    // Create an image element for the hover effect
    const hoverImage = document.createElement('img');
    hoverImage.src = 'searchsuggestions.jpg'; // Replace with your image URL
    hoverImage.classList.add('hover-image');
    hoverImage.style.display = 'none'; // Initially hide the image

    // Append the hover image to the suggestion item
    suggestionItem.appendChild(hoverImage);

    // Add event listener for mouseover to show the hover image
    suggestionItem.addEventListener('mouseover', () => {
      hoverImage.style.display = 'block';
    });

    // Add event listener for mouseout to hide the hover image
    suggestionItem.addEventListener('mouseout', () => {
      hoverImage.style.display = 'none';
    });
  } else if (feature === 'Confirmation Prompts') {
    suggestionItem.textContent += "Ensure that confirmation prompts are clear and provide enough information for users to make informed decisions.";
    // Create an image element for the hover effect
    const hoverImage = document.createElement('img');
    hoverImage.src = 'confirmationprompts.png'; // Replace with your image URL
    hoverImage.classList.add('hover-image');
    hoverImage.style.display = 'none'; // Initially hide the image

    // Append the hover image to the suggestion item
    suggestionItem.appendChild(hoverImage);

    // Add event listener for mouseover to show the hover image
    suggestionItem.addEventListener('mouseover', () => {
      hoverImage.style.display = 'block';
    });

    // Add event listener for mouseout to hide the hover image
    suggestionItem.addEventListener('mouseout', () => {
      hoverImage.style.display = 'none';
    });
  } else if (feature === 'Form Validation') {
    suggestionItem.textContent += "Provide real-time feedback to users through form validation to prevent errors before they occur.";
    // Create an image element for the hover effect
    const hoverImage = document.createElement('img');
    hoverImage.src = 'formvalidation.png'; // Replace with your image URL
    hoverImage.classList.add('hover-image');
    hoverImage.style.display = 'none'; // Initially hide the image

    // Append the hover image to the suggestion item
    suggestionItem.appendChild(hoverImage);

    // Add event listener for mouseover to show the hover image
    suggestionItem.addEventListener('mouseover', () => {
      hoverImage.style.display = 'block';
    });

    // Add event listener for mouseout to hide the hover image
    suggestionItem.addEventListener('mouseout', () => {
      hoverImage.style.display = 'none';
    });
  } else if (feature === 'Tooltips') {
    suggestionItem.textContent += "Use tooltips judiciously to provide additional information without overwhelming the user.";
    // Create an image element for the hover effect
    const hoverImage = document.createElement('img');
    hoverImage.src = 'tooltips.jpg'; // Replace with your image URL
    hoverImage.classList.add('hover-image');
    hoverImage.style.display = 'none'; // Initially hide the image

    // Append the hover image to the suggestion item
    suggestionItem.appendChild(hoverImage);

    // Add event listener for mouseover to show the hover image
    suggestionItem.addEventListener('mouseover', () => {
      hoverImage.style.display = 'block';
    });

    // Add event listener for mouseout to hide the hover image
    suggestionItem.addEventListener('mouseout', () => {
      hoverImage.style.display = 'none';
    });
  } else if (feature === 'messy') {
    suggestionItem.textContent += "Simplify the layout, remove clutter, and improve the visual hierarchy to create a more pleasing aesthetic.";
    // Create an image element for the hover effect
    const hoverImage = document.createElement('img');
    hoverImage.src = 'messy.png'; // Replace with your image URL
    hoverImage.classList.add('hover-image');
    hoverImage.style.display = 'none'; // Initially hide the image

    // Append the hover image to the suggestion item
    suggestionItem.appendChild(hoverImage);

    // Add event listener for mouseover to show the hover image
    suggestionItem.addEventListener('mouseover', () => {
      hoverImage.style.display = 'block';
    });

    // Add event listener for mouseout to hide the hover image
    suggestionItem.addEventListener('mouseout', () => {
      hoverImage.style.display = 'none';
    });
  } else if (feature === 'Invalid Input') {
    suggestionItem.textContent += "Provide clear feedback on how to correct errors and prevent them from recurring for invalid inputs.";
     // Create an image element for the hover effect
     const hoverImage = document.createElement('img');
     hoverImage.src = 'invalidinput.png'; // Replace with your image URL
     hoverImage.classList.add('hover-image');
     hoverImage.style.display = 'none'; // Initially hide the image
 
     // Append the hover image to the suggestion item
     suggestionItem.appendChild(hoverImage);
 
     // Add event listener for mouseover to show the hover image
     suggestionItem.addEventListener('mouseover', () => {
       hoverImage.style.display = 'block';
     });
 
     // Add event listener for mouseout to hide the hover image
     suggestionItem.addEventListener('mouseout', () => {
       hoverImage.style.display = 'none';
     });
  } else if (feature === 'Error-msg') {
    suggestionItem.textContent += "Ensure that error messages are informative, actionable, and help users understand the problem and how to fix it.";
    // Create an image element for the hover effect
    const hoverImage = document.createElement('img');
    hoverImage.src = 'errormsg.png'; // Replace with your image URL
    hoverImage.classList.add('hover-image');
    hoverImage.style.display = 'none'; // Initially hide the image

    // Append the hover image to the suggestion item
    suggestionItem.appendChild(hoverImage);

    // Add event listener for mouseover to show the hover image
    suggestionItem.addEventListener('mouseover', () => {
      hoverImage.style.display = 'block';
    });

    // Add event listener for mouseout to hide the hover image
    suggestionItem.addEventListener('mouseout', () => {
      hoverImage.style.display = 'none';
    });
  } else {
    index--; // Adjust index if the feature is not recognized
    return; // Exit the current iteration
  }

  suggestions.appendChild(suggestionItem);
});


// Process the results and display them in dynamic_result.html
// const resultList = document.getElementById('resultList');

// Loop through each model in the data
//this is for suggestions
// for (let model in data) {
//     const modelItem = document.createElement('li');
//     if (model === 'Not Present') {
//         modelItem.textContent = "Suggestions for Improving the User Interface:";
//         const notPresentList = document.createElement('ul');
//         // Loop through each feature in the not_present dictionary
//         let count = 0;
//         for (let feature in data[model]) {
//             const featureItem = document.createElement('li');
            // featureItem.textContent = `${feature}: ${data[model][feature]}`;
            // if (feature === 'Loading Indicator') {
            //     featureItem.textContent += " Consider improving the design of loading indicators to make them more noticeable and easily understood by users.";
            // } else if (feature === 'Process flows') {
            //     featureItem.textContent += " Ensure that the user interface reflects the logical flow of tasks, making it easier for users to understand and navigate.";
            // } else if (feature === 'Back' || feature === 'Cancel' || feature === 'Close' || feature === 'Undo') {
            //     count++;
            // } else if (feature === 'External Consistency') {
            //     featureItem.textContent += " Maintain consistency in the layout and behavior of form elements throughout the application to ensure external consistency.";
            // } else if (feature === 'Skeuomorphic web design') {
            //     featureItem.textContent += " Ensure that design elements and interactions adhere to established standards across the application.";
            // } else if (feature === 'Search Suggestions') {
            //     featureItem.textContent += " Improve the visibility and usability of search suggestions to help users avoid errors in their search queries.";
            // } else if (feature === 'Confirmation Prompts') {
            //     featureItem.textContent += " Ensure that confirmation prompts are clear and provide enough information for users to make informed decisions.";
            // } else if (feature === 'Form Validation') {
            //     featureItem.textContent += " Provide real-time feedback to users through form validation to prevent errors before they occur.";
            // } else if (feature === 'Tooltips') {
            //     featureItem.textContent += " Use tooltips judiciously to provide additional information without overwhelming the user.";
            // } else if (feature === 'messy') {
            //     featureItem.textContent += " Simplify the layout, remove clutter, and improve the visual hierarchy to create a more pleasing aesthetic.";
            // } else if (feature === 'Invalid Input') {
            //     featureItem.textContent += " Provide clear feedback on how to correct errors and prevent them from recurring for invalid inputs.";
            // } else if (feature === 'Error-msg') {
            //     featureItem.textContent += " Ensure that error messages are informative, actionable, and help users understand the problem and how to fix it.";
            // }
            // if (count>=2) {
            //     count = 0;
            //     featureItem.textContent += " To enhance user control and freedom, consider adding more back, cancel, undo, and close buttons.";
            // }
//             notPresentList.appendChild(featureItem);
//         }
//         modelItem.appendChild(notPresentList);
//     }
    
// }
//////////////////////////PROGRESS BARS/////////////////////
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

            // Add feature names with their existence status as tooltips
            const featuresTooltip = document.createElement('div');
            featuresTooltip.classList.add('tooltip-features');
            for (const feature in data['Evaluation_Result'][model]) {
                const status = data['Evaluation_Result'][model][feature];
                // Create an img element based on the status value
                const imgSrc = status === 1 ? 'tick.png' : 'wrong.png';
                // Wrap text and image in a single div
                const featureDiv = document.createElement('div');
                featureDiv.innerHTML = `${feature} <img src="${imgSrc}" alt="${feature}">`;
                featuresTooltip.appendChild(featureDiv);
            }

            // Position the tooltip relative to the bar
            featuresTooltip.style.top = `${-barInner.offsetHeight}px`; // Position above the bar
            featuresTooltip.style.left = 0; // Align with the left edge of the bar

            barInner.appendChild(featuresTooltip);
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
})(document);


/////////////////////OVERALL SCORE//////////////////////////
  let progressBar = document.querySelector(".circular-progress");
  let valueContainer = document.querySelector(".value-container");
  
  // Retrieve the Overall Usability Score from the data
const overallScore = data['Overall Usability Score'];
console.log(overallScore);

// Set the initial progress value to 0
let progressValue = 0;

// Set the progressEndValue to the Overall Usability Score
let progressEndValue = overallScore;

// Calculate the speed of the progress animation
let speed = 20;

// Define the progress update function
let progress = setInterval(() => {
    progressValue += 0.1;
    progressValue = parseFloat(progressValue.toFixed(1)); // Convert to fixed number of decimal places
    valueContainer.textContent = `${progressValue}%`;
    progressBar.style.background = `conic-gradient(
        #37ADBD ${progressValue * 3.6}deg,
        #ffffff ${progressValue * 3.6}deg
    )`; // Incrementing the end angle by 0.1 degree
    // console.log(progressValue);
    if (progressValue >= progressEndValue) {
        clearInterval(progress);
    }
}, speed);

/////////////////////USABILITY BARS///////////////////////
// Update the progress bars for Accessibility, Efficiency, Memorability, and Learnability
const accessibilityRating = data['Accessibility Rating'];
const efficiencyRating = data['Efficiency Rating'];
const memorabilityRating = data['Memorability Rating'];
const learnabilityRating = data['Learnability Rating'];

updateProgressBar('.Accessibility', accessibilityRating);
updateProgressBar('.Efficiency', efficiencyRating);
updateProgressBar('.Memorability', memorabilityRating);
updateProgressBar('.Learnability', learnabilityRating);

function updateProgressBar(selector, rating) {
    const progressBar = document.querySelector(selector);
    if (!progressBar) return;

    // Convert the decimal percentage to a whole number
    const percentage = parseInt(rating);

    // Set the --value property and aria-valuenow attribute
    progressBar.style.setProperty('--value', `${percentage}`);
    progressBar.setAttribute('aria-valuenow', `${percentage}`);
}