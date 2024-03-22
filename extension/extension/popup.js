//popup.js

// chrome.storage.sync.clear(function() {
//   console.log("Storage cleared");
// });

document.addEventListener('DOMContentLoaded', function () {

    document.getElementById('extractUrlButton').addEventListener('click', function () {
          chrome.runtime.sendMessage({ action: 'extractUrl' });
        });
    let websiteType = '';
    let imageFile = null;
  
  // Variables to store the show/hide state for each ID
  let page1Visible;
  let page2EcommerceVisible;
  let inputDiv1Visible;
  let input1;
  let page3EcommerceVisible;
  let inputDiv2Visible;
  let input2;
  let page4EcommerceVisible;
  let inputDiv3Visible;
  let input3;
  let page5EcommerceVisible;
  let inputDiv4Visible;
  let input4;
  let page6EcommerceVisible;
  let inputDiv5Visible;
  let input5;
  let page7EcommerceVisible;
  let inputDiv6Visible;
  let input6;
  let page8EcommerceVisible;
  let inputDiv7Visible;
  let input7;
  let page2InfoVisible;
  let inputDiv8Visible;
  let input8;
  let page3InfoVisible;
  let inputDiv9Visible;
  let input9;
  let page4InfoVisible;
  let inputDiv10Visible;
  let input10;
  let page5InfoVisible;
  let inputDiv11Visible;
  let input11;
  let page6InfoVisible;
  let inputDiv12Visible;
  let input12;
  
  // Function to show the correct page based on stored state
  function showStoredPage() {
      // Get the stored page states
      chrome.storage.sync.get(['pageStates'], function (result) {
          const storedPageStates = result.pageStates || {};
  
          // Initialize the variables with stored state or default values
          page1Visible = storedPageStates.page1Visible ?? true;
          page2EcommerceVisible = storedPageStates.page2EcommerceVisible ?? false;
          inputDiv1Visible = storedPageStates.inputDiv1Visible ?? true;
          input1 = storedPageStates.input1 ?? false;
          page3EcommerceVisible = storedPageStates.page3EcommerceVisible ?? false;
          inputDiv2Visible = storedPageStates.inputDiv2Visible ?? true;
          input2 = storedPageStates.input2 ?? false;
          page4EcommerceVisible = storedPageStates.page4EcommerceVisible ?? false;
          inputDiv3Visible = storedPageStates.inputDiv3Visible ?? true;
          input3 = storedPageStates.input3 ?? false;
          page5EcommerceVisible = storedPageStates.page5EcommerceVisible ?? false;
          inputDiv4Visible = storedPageStates.inputDiv4Visible ?? true;
          input4 = storedPageStates.input4 ?? false;
          page6EcommerceVisible = storedPageStates.page6EcommerceVisible ?? false;
          inputDiv5Visible = storedPageStates.inputDiv5Visible ?? true;
          input5 = storedPageStates.input5 ?? false;
          page7EcommerceVisible = storedPageStates.page7EcommerceVisible ?? false;
          inputDiv6Visible = storedPageStates.inputDiv6Visible ?? true;
          input6 = storedPageStates.input6 ?? false;
          page8EcommerceVisible = storedPageStates.page8EcommerceVisible ?? false;
          inputDiv7Visible = storedPageStates.inputDiv7Visible ?? true;
          input7 = storedPageStates.input7 ?? false;
          page2InfoVisible = storedPageStates.page2InfoVisible ?? false;
          inputDiv8Visible = storedPageStates.inputDiv8Visible ?? true;
          input8 = storedPageStates.input8 ?? false;
          page3InfoVisible = storedPageStates.page3InfoVisible ?? false;
          inputDiv9Visible = storedPageStates.inputDiv9Visible ?? true;
          input9 = storedPageStates.input9 ?? false;
          page4InfoVisible = storedPageStates.page4InfoVisible ?? false;   
          inputDiv10Visible = storedPageStates.inputDiv10Visible ?? true;
          input10 = storedPageStates.input10 ?? false;
          page5InfoVisible = storedPageStates.page5InfoVisible ?? false;
          inputDiv11Visible = storedPageStates.inputDiv11Visible ?? true;
          input11 = storedPageStates.input11 ?? false;
          page6InfoVisible = storedPageStates.page6InfoVisible ?? false;
          inputDiv12Visible = storedPageStates.inputDiv12Visible ?? true;
          input12 = storedPageStates.input12 ?? false;
  
          // Show/hide pages based on stored state
          document.getElementById('page1').style.display = page1Visible ? 'block' : 'none';
          document.getElementById('page2-ecommerce').style.display = page2EcommerceVisible ? 'block' : 'none';
          document.getElementById('input-div-1').style.display = inputDiv1Visible ? 'block' : 'none';
          document.getElementById('input-1').style.display = input1 ? 'block' : 'none';
          document.getElementById('page3-ecommerce').style.display = page3EcommerceVisible ? 'block' : 'none';
          document.getElementById('input-div-2').style.display = inputDiv2Visible ? 'block' : 'none';
          document.getElementById('input-2').style.display = input2 ? 'block' : 'none';
          document.getElementById('page4-ecommerce').style.display = page4EcommerceVisible ? 'block' : 'none';
          document.getElementById('input-div-3').style.display = inputDiv3Visible ? 'block' : 'none';
          document.getElementById('input-3').style.display = input3 ? 'block' : 'none';
          document.getElementById('page5-ecommerce').style.display = page5EcommerceVisible ? 'block' : 'none';
          document.getElementById('input-div-4').style.display = inputDiv4Visible ? 'block' : 'none';
          document.getElementById('input-4').style.display = input4 ? 'block' : 'none';
          document.getElementById('page6-ecommerce').style.display = page6EcommerceVisible ? 'block' : 'none';
          document.getElementById('input-div-5').style.display = inputDiv5Visible ? 'block' : 'none';
          document.getElementById('input-5').style.display = input5 ? 'block' : 'none';
          document.getElementById('page7-ecommerce').style.display = page7EcommerceVisible ? 'block' : 'none';
          document.getElementById('input-div-6').style.display = inputDiv6Visible ? 'block' : 'none';
          document.getElementById('input-6').style.display = input6 ? 'block' : 'none';
          document.getElementById('page8-ecommerce').style.display = page8EcommerceVisible ? 'block' : 'none';
          document.getElementById('input-div-7').style.display = inputDiv7Visible ? 'block' : 'none';
          document.getElementById('input-7').style.display = input7 ? 'block' : 'none';
          document.getElementById('page2-info').style.display = page2InfoVisible ? 'block' : 'none';
          document.getElementById('input-div-8').style.display = inputDiv8Visible ? 'block' : 'none';
          document.getElementById('input-8').style.display = input8 ? 'block' : 'none';
          document.getElementById('page3-info').style.display = page3InfoVisible ? 'block' : 'none';
          document.getElementById('input-div-9').style.display = inputDiv9Visible ? 'block' : 'none';
          document.getElementById('input-9').style.display = input9 ? 'block' : 'none';
          document.getElementById('page4-info').style.display = page4InfoVisible ? 'block' : 'none';
          document.getElementById('input-div-10').style.display = inputDiv10Visible ? 'block' : 'none';
          document.getElementById('input-10').style.display = input10 ? 'block' : 'none';
          document.getElementById('page5-info').style.display = page5InfoVisible ? 'block' : 'none';
          document.getElementById('input-div-11').style.display = inputDiv11Visible ? 'block' : 'none';
          document.getElementById('input-11').style.display = input11 ? 'block' : 'none';
          document.getElementById('page6-info').style.display = page6InfoVisible ? 'block' : 'none';
          document.getElementById('input-div-12').style.display = inputDiv12Visible ? 'block' : 'none';
          document.getElementById('input-12').style.display = input12 ? 'block' : 'none';
  
      });
  }
  
  // Function to save the show/hide state for each ID
  function savePageStates() {
    const pageStates = {
        page1Visible: page1Visible,
        page2EcommerceVisible: page2EcommerceVisible,
        inputDiv1Visible: inputDiv1Visible,
        input1: input1,
        page3EcommerceVisible: page3EcommerceVisible,
        inputDiv2Visible: inputDiv2Visible,
        input2: input2,
        page4EcommerceVisible: page4EcommerceVisible,
        inputDiv3Visible: inputDiv3Visible,
        input3: input3,
        page5EcommerceVisible: page5EcommerceVisible,
        inputDiv4Visible: inputDiv4Visible,
        input4: input4,
        page6EcommerceVisible: page6EcommerceVisible,
        inputDiv5Visible: inputDiv5Visible,
        input5: input5,
        page7EcommerceVisible: page7EcommerceVisible,
        inputDiv6Visible: inputDiv6Visible,
        input6: input6,
        page8EcommerceVisible: page8EcommerceVisible,
        inputDiv7Visible: inputDiv7Visible,
        input7: input7 ,
        page2InfoVisible: page2InfoVisible,
          inputDiv8Visible: inputDiv8Visible,
          input8: input8,
          page3InfoVisible: page3InfoVisible,
          inputDiv9Visible: inputDiv9Visible,
          input9: input9,
          page4InfoVisible: page4InfoVisible,
          inputDiv10Visible: inputDiv10Visible,
          input10: input10,
          page5InfoVisible: page5InfoVisible,
          inputDiv11Visible: inputDiv11Visible,
          input11: input11,
          page6InfoVisible: page6InfoVisible,
          inputDiv12Visible: inputDiv12Visible,
          input12: input12
  
    };
    chrome.storage.sync.set({ pageStates: pageStates }, function() {
      console.log('Saved page states:', pageStates);
    });
  }
  
  // Next button click event to show page 2
  document.getElementById('nextButton').addEventListener('click', function () {
      // Get the selected website type
      const websiteTypeRadios = document.getElementsByName('websiteType');
      let radioSelected = false;
      for (const radio of websiteTypeRadios) {
          if (radio.checked) {
              websiteType = radio.value;
              radioSelected = true;
              break;
          }
      }
  
      // Show page 2 if a radio button is selected, otherwise show an alert
      if (radioSelected) {
          // Hide the current page
          if (page1Visible) {
              page1Visible = false;
          } else if (page2EcommerceVisible) {
              page2EcommerceVisible = false;
          } else if (page3EcommerceVisible) {
              page3EcommerceVisible = false;
          } else if (page4EcommerceVisible) {
              page4EcommerceVisible = false;
          } else if (page5EcommerceVisible) {
              page5EcommerceVisible = false;
          } else if (page6EcommerceVisible) {
              page6EcommerceVisible = false;
          } else if (page7EcommerceVisible) {
              page7EcommerceVisible = false;
          } else if (page8EcommerceVisible) {
              page8EcommerceVisible = false;
          } else if (page2InfoVisible) {
              page2InfoVisible = false;
          } else if (page3InfoVisible) {
              page3InfoVisible = false;
          } else if (page4InfoVisible) {
              page4InfoVisible = false;
          } else if (page5InfoVisible) {
              page5InfoVisible = false;
          } else if (page6InfoVisible) {
              page6InfoVisible = false;
          }
  
  
          // Show the selected page
          if (websiteType === 'ecommerce') {
              page2EcommerceVisible = true;
          }
          else if(websiteType === 'informational')
          {
              page2InfoVisible = true;
          }
  
          // Save the current state
          savePageStates();
  
          // Update the display based on the new state
          showStoredPage();
      } else {
          alert('Please select a website type.');
      }
  
  });
  
  // Initially show page 1
  showStoredPage();
  
    //page 2 ecommerce 
    var fileInput = document.getElementById('fileInput');
    var captureButton = document.getElementById('captureButton');
    var submitButton = document.getElementById('submit-button');
    var uploadedImage = document.getElementById('uploaded-image-main');
  
    var captureDataUrl = null;
    var selectedFile = null;
  
    fileInput.addEventListener('change', function () {
        selectedFile = fileInput.files[0];
        var reader = new FileReader();
  
        reader.onload = function (e) {
            uploadedImage.src = e.target.result;
        };
  
        reader.readAsDataURL(selectedFile);
    });
  
    captureButton.addEventListener('click', function () {
        chrome.tabs.captureVisibleTab(null, { format: 'png' }, function (dataUrl) {
            captureDataUrl = dataUrl;
            uploadedImage.src = dataUrl;
        });
    });
  
    submitButton.addEventListener('click', function () {
        var formData = new FormData();
  
        if (captureDataUrl) {
            formData.append('file', dataURLtoFile(captureDataUrl, 'screenshot.png'));
        } else if (selectedFile) {
            formData.append('file', selectedFile);
        } else {
            console.error('No file or screenshot to upload');
            return;
        }
  
        fetch('http://localhost:5000/upload_e1', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            input1 = true;
            inputDiv1Visible = false;
            page3EcommerceVisible = true;
            uploadedImage.src = null;
            // Save the current state
            savePageStates();
            // Update the display based on the new state
            showStoredPage();
        })
        .catch(error => console.error('Error:', error));
    });
  
    function dataURLtoFile(dataUrl, filename) {
        var arr = dataUrl.split(',');
        var mime = arr[0].match(/:(.*?);/)[1];
        var bstr = atob(arr[1]);
        var n = bstr.length;
        var u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, { type: mime });
    }
  
    //page 3 ecommerce 
    var fileInput2 = document.getElementById('fileInput2');
    var captureButton2 = document.getElementById('captureButton2');
    var submitButton2 = document.getElementById('submit-button2');
    var uploadedImage2 = document.getElementById('uploaded-image-search');
  
    captureDataUrl = null;
    selectedFile = null;
  
    fileInput2.addEventListener('change', function () {
      selectedFile = fileInput2.files[0];
      var reader = new FileReader();
  
      reader.onload = function (e) {
          uploadedImage2.src = e.target.result;
      };
  
      reader.readAsDataURL(selectedFile);
  });
  
  captureButton2.addEventListener('click', function () {
      chrome.tabs.captureVisibleTab(null, { format: 'png' }, function (dataUrl) {
          captureDataUrl = dataUrl;
          uploadedImage2.src = dataUrl;
      });
  });
  
  submitButton2.addEventListener('click', function () {
      var formData = new FormData();
  
      if (captureDataUrl) {
          formData.append('file', dataURLtoFile(captureDataUrl, 'screenshot.png'));
      } else if (selectedFile) {
          formData.append('file', selectedFile);
      } else {
          console.error('No file or screenshot to upload');
          return;
      }
  
      fetch('http://localhost:5000/upload_e2', {
          method: 'POST',
          body: formData
      })
      .then(response => response.json())
      .then(data => {
          console.log(data);
          input2 = true;
          inputDiv2Visible = false;
          page4EcommerceVisible = true;
          uploadedImage2.src = null;
          // Save the current state
          savePageStates();
          // Update the display based on the new state
          showStoredPage();
      })
      .catch(error => console.error('Error:', error));
  });
  
  
    //page 4 ecommerce 
    var fileInput3 = document.getElementById('fileInput3');
    var captureButton3 = document.getElementById('captureButton3');
    var submitButton3 = document.getElementById('submit-button3');
    var uploadedImage3 = document.getElementById('uploaded-image-searchres');
  
    captureDataUrl = null;
    selectedFile = null;
  
    fileInput3.addEventListener('change', function () {
      selectedFile = fileInput3.files[0];
      var reader = new FileReader();
  
      reader.onload = function (e) {
          uploadedImage3.src = e.target.result;
      };
  
      reader.readAsDataURL(selectedFile);
    });
  
    captureButton3.addEventListener('click', function () {
        chrome.tabs.captureVisibleTab(null, { format: 'png' }, function (dataUrl) {
            captureDataUrl = dataUrl;
            uploadedImage3.src = dataUrl;
        });
    });
  
    submitButton3.addEventListener('click', function () {
        var formData = new FormData();
  
        if (captureDataUrl) {
            formData.append('file', dataURLtoFile(captureDataUrl, 'screenshot.png'));
        } else if (selectedFile) {
            formData.append('file', selectedFile);
        } else {
            console.error('No file or screenshot to upload');
            return;
        }
  
        fetch('http://localhost:5000/upload_e3', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            input3 = true;
            inputDiv3Visible = false;
            page5EcommerceVisible = true;
            uploadedImage3.src = null;
            // Save the current state
            savePageStates();
            // Update the display based on the new state
            showStoredPage();
        })
        .catch(error => console.error('Error:', error));
    });
  
  //page 5 ecommerce 
  var fileInput4 = document.getElementById('fileInput4');
  var captureButton4 = document.getElementById('captureButton4');
  var submitButton4 = document.getElementById('submit-button4');
  var uploadedImage4 = document.getElementById('uploaded-image-cart');
  
  var captureDataUrl4 = null;
  var selectedFile4 = null;
  
  fileInput4.addEventListener('change', function () {
      selectedFile4 = fileInput4.files[0];
      var reader = new FileReader();
  
      reader.onload = function (e) {
          uploadedImage4.src = e.target.result;
      };
  
      reader.readAsDataURL(selectedFile4);
  });
  
  captureButton4.addEventListener('click', function () {
      chrome.tabs.captureVisibleTab(null, { format: 'png' }, function (dataUrl) {
          captureDataUrl4 = dataUrl;
          uploadedImage4.src = dataUrl;
      });
  });
  
  submitButton4.addEventListener('click', function () {
      var formData = new FormData();
  
      if (captureDataUrl4) {
          formData.append('file', dataURLtoFile(captureDataUrl4, 'screenshot.png'));
      } else if (selectedFile4) {
          formData.append('file', selectedFile4);
      } else {
          console.error('No file or screenshot to upload');
          return;
      }
  
      fetch('http://localhost:5000/upload_e4', {
          method: 'POST',
          body: formData
      })
      .then(response => response.json())
      .then(data => {
          console.log(data);
          input4 = true;
          inputDiv4Visible = false;
          page6EcommerceVisible = true; // Assuming you want to hide page 5 after submission
          uploadedImage4.src = null;
          // Save the current state
          savePageStates();
          // Update the display based on the new state
          showStoredPage();
      })
      .catch(error => console.error('Error:', error));
  });
  
  
  //page 6 ecommerce 
  var fileInput5 = document.getElementById('fileInput5');
  var captureButton5 = document.getElementById('captureButton5');
  var submitButton5 = document.getElementById('submit-button5');
  var uploadedImage5 = document.getElementById('uploaded-image-form');
  
  var captureDataUrl5 = null;
  var selectedFile5 = null;
  
  fileInput5.addEventListener('change', function () {
      selectedFile5 = fileInput5.files[0];
      var reader = new FileReader();
  
      reader.onload = function (e) {
          uploadedImage5.src = e.target.result;
      };
  
      reader.readAsDataURL(selectedFile5);
  });
  
  captureButton5.addEventListener('click', function () {
      chrome.tabs.captureVisibleTab(null, { format: 'png' }, function (dataUrl) {
          captureDataUrl5 = dataUrl;
          uploadedImage5.src = dataUrl;
      });
  });
  
  submitButton5.addEventListener('click', function () {
      var formData = new FormData();
  
      if (captureDataUrl5) {
          formData.append('file', dataURLtoFile(captureDataUrl5, 'screenshot.png'));
      } else if (selectedFile5) {
          formData.append('file', selectedFile5);
      } else {
          console.error('No file or screenshot to upload');
          return;
      }
  
      fetch('http://localhost:5000/upload_e5', {
          method: 'POST',
          body: formData
      })
      .then(response => response.json())
      .then(data => {
          console.log(data);
          input5 = true;
          inputDiv5Visible = false;
          // Assuming you want to hide page 6 after submission
          page7EcommerceVisible = true;
          uploadedImage5.src = null;
          // Save the current state
          savePageStates();
          // Update the display based on the new state
          showStoredPage();
      })
      .catch(error => console.error('Error:', error));
  });
  
  
  //page 7 ecommerce 
  var fileInput6 = document.getElementById('fileInput6');
  var captureButton6 = document.getElementById('captureButton6');
  var submitButton6 = document.getElementById('submit-button6');
  var uploadedImage6 = document.getElementById('uploaded-image-invalid');
  
  var captureDataUrl6 = null;
  var selectedFile6 = null;
  
  fileInput6.addEventListener('change', function () {
      selectedFile6 = fileInput6.files[0];
      var reader = new FileReader();
  
      reader.onload = function (e) {
          uploadedImage6.src = e.target.result;
      };
  
      reader.readAsDataURL(selectedFile6);
  });
  
  captureButton6.addEventListener('click', function () {
      chrome.tabs.captureVisibleTab(null, { format: 'png' }, function (dataUrl) {
          captureDataUrl6 = dataUrl;
          uploadedImage6.src = dataUrl;
      });
  });
  
  submitButton6.addEventListener('click', function () {
      var formData = new FormData();
  
      if (captureDataUrl6) {
          formData.append('file', dataURLtoFile(captureDataUrl6, 'screenshot.png'));
      } else if (selectedFile6) {
          formData.append('file', selectedFile6);
      } else {
          console.error('No file or screenshot to upload');
          return;
      }
  
      fetch('http://localhost:5000/upload_e6', {
          method: 'POST',
          body: formData
      })
      .then(response => response.json())
      .then(data => {
          console.log(data);
          input6 = true;
          inputDiv6Visible = false;
          // Assuming you want to hide page 7 after submission
          page8EcommerceVisible = true;
          uploadedImage6.src = null;
          // Save the current state
          savePageStates();
          // Update the display based on the new state
          showStoredPage();
      })
      .catch(error => console.error('Error:', error));
  });
  
  
  //page 8 ecommerce 
  var fileInput7 = document.getElementById('fileInput7');
  // var captureButton7 = document.getElementById('captureButton7');
  var submitButton7 = document.getElementById('submit-button7');
  var uploadedImage7 = document.getElementById('uploaded-image-checkout');
  var checkbox7 = document.getElementById('error-check');
  // var captureDataUrl7 = null;
  var selectedFile7 = null;
  var headings = this.getElementsByName('image-page');
  
  fileInput7.addEventListener('change', function () {
      selectedFile7 = fileInput7.files[0];
      var reader = new FileReader();
  
      reader.onload = function (e) {
          uploadedImage7.src = e.target.result;
      };
  
      reader.readAsDataURL(selectedFile7);
  });
  
  submitButton7.addEventListener('click', function () {
      var formData = new FormData();
      var checkboxChecked = checkbox7.checked;
      console.log('checkbox state ',checkboxChecked);
  
      if (!checkboxChecked && !selectedFile7) {
          console.error('No checkbox ticked, file, or screenshot to upload');
          return;
      }
  
      if (selectedFile7) {
          formData.append('file', selectedFile7);
          fetch('http://localhost:5000/upload_e7', {
              method: 'POST',
              body: formData
          })
          .then(response => response.json())
          .then(data => {
              console.log(data);
              input1 = false;
              input2 = false;
              input3 = false;
              input4 = false;
              input5 = false;
              input6 = false;
              input7 = false;
              inputDiv7Visible = false;
              uploadedImage7.src = null;
              document.getElementById("ecomm-last").style.display = "block";
              // Save the current state
              savePageStates();
              // Update the display based on the new state
              showStoredPage();
          })
          .catch(error => console.error('Error:', error));
      } else if (checkboxChecked) {
          input1 = false;
          input2 = false;
          input3 = false;
          input4 = false;
          input5 = false;
          input6 = false;
          input7 = false;
          inputDiv7Visible = false;
          page1Visible = false;
          page2EcommerceVisible = false;
          page3EcommerceVisible = false;
          page4EcommerceVisible = false;
          page5EcommerceVisible = false;
          page6EcommerceVisible = false;
          page7EcommerceVisible = false;
          page8EcommerceVisible = false;
          uploadedImage7.src = null;
          headings.forEach(heading => {
              heading.style.display= 'none';
          });
          document.getElementById("ecomm-last").style.display = "block";
          // Save the current state
          savePageStates();
          // Update the display based on the new state
          showStoredPage();
      }
      console.log('making fetch');
      // Make an AJAX request to fetch the results
      fetch('http://localhost:5000/finalresults')
          .then(response => response.json())
          .then(data => {
              // Open dynamic_result.html and pass the data to it
              const popupWindow = window.open('dynamic_result.html', '_blank'); // Open in new tab
              popupWindow.data = data; // Pass the data to the opened window
          })
          .catch(error => console.error('Error:', error));

      
      chrome.storage.sync.clear(function() {
          console.log("Storage cleared");
      });
      
      
  });
  
  
    //page 2 info 
    var fileInput8 = document.getElementById('fileInput8');
    var captureButton8 = document.getElementById('captureButton8');
    var submitButton8 = document.getElementById('submit-button8');
    var uploadedImage8 = document.getElementById('uploaded-info-home');
  
    var captureDataUrl8 = null;
    var selectedFile8 = null;
  
    fileInput8.addEventListener('change', function () {
        selectedFile8 = fileInput.files[0];
        var reader = new FileReader();
  
        reader.onload = function (e) {
            uploadedImage8.src = e.target.result;
        };
  
        reader.readAsDataURL(selectedFile8);
    });
  
    captureButton8.addEventListener('click', function () {
        chrome.tabs.captureVisibleTab(null, { format: 'png' }, function (dataUrl) {
            captureDataUrl8 = dataUrl;
            uploadedImage8.src = dataUrl;
        });
    });
  
    submitButton8.addEventListener('click', function () {
        var formData = new FormData();
  
        if (captureDataUrl8) {
            formData.append('file', dataURLtoFile(captureDataUrl8, 'screenshot.png'));
        } else if (selectedFile8) {
            formData.append('file', selectedFile8);
        } else {
            console.error('No file or screenshot to upload');
            return;
        }
  
        fetch('http://localhost:5000/upload_i1', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            input8 = true;
            inputDiv8Visible = false;
            page3InfoVisible = true;
            uploadedImage8.src = null;
            // Save the current state
            savePageStates();
            // Update the display based on the new state
            showStoredPage();
        })
        .catch(error => console.error('Error:', error));
    });
  
  
    //page 3 info 
    var fileInput9 = document.getElementById('fileInput9');
    var captureButton9 = document.getElementById('captureButton9');
    var submitButton9 = document.getElementById('submit-button9');
    var uploadedImage9 = document.getElementById('uploaded-info-3');
  
    var captureDataUrl9 = null;
    var selectedFile9 = null;
  
    fileInput9.addEventListener('change', function () {
        selectedFile9 = fileInput.files[0];
        var reader = new FileReader();
  
        reader.onload = function (e) {
            uploadedImage9.src = e.target.result;
        };
  
        reader.readAsDataURL(selectedFile9);
    });
  
    captureButton9.addEventListener('click', function () {
        chrome.tabs.captureVisibleTab(null, { format: 'png' }, function (dataUrl) {
            captureDataUrl9 = dataUrl;
            uploadedImage9.src = dataUrl;
        });
    });
  
    submitButton9.addEventListener('click', function () {
        var formData = new FormData();
  
        if (captureDataUrl9) {
            formData.append('file', dataURLtoFile(captureDataUrl9, 'screenshot.png'));
        } else if (selectedFile9) {
            formData.append('file', selectedFile9);
        } else {
            console.error('No file or screenshot to upload');
            return;
        }
  
        fetch('http://localhost:5000/upload_i2', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            input9 = true;
            inputDiv9Visible = false;
            page4InfoVisible = true;
            uploadedImage9.src = null;
            // Save the current state
            savePageStates();
            // Update the display based on the new state
            showStoredPage();
        })
        .catch(error => console.error('Error:', error));
    });
  
  
    //page 4 info 
    var fileInput10 = document.getElementById('fileInput10');
    var captureButton10 = document.getElementById('captureButton10');
    var submitButton10 = document.getElementById('submit-button10');
    var uploadedImage10 = document.getElementById('uploaded-info-4');
  
    var captureDataUrl10 = null;
    var selectedFile10 = null;
  
    fileInput10.addEventListener('change', function () {
        selectedFile10 = fileInput.files[0];
        var reader = new FileReader();
  
        reader.onload = function (e) {
            uploadedImage10.src = e.target.result;
        };
  
        reader.readAsDataURL(selectedFile10);
    });
  
    captureButton10.addEventListener('click', function () {
        chrome.tabs.captureVisibleTab(null, { format: 'png' }, function (dataUrl) {
            captureDataUrl10 = dataUrl;
            uploadedImage10.src = dataUrl;
        });
    });
  
    submitButton10.addEventListener('click', function () {
        var formData = new FormData();
  
        if (captureDataUrl10) {
            formData.append('file', dataURLtoFile(captureDataUrl10, 'screenshot.png'));
        } else if (selectedFile10) {
            formData.append('file', selectedFile10);
        } else {
            console.error('No file or screenshot to upload');
            return;
        }
  
        fetch('http://localhost:5000/upload_i3', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            input10 = true;
            inputDiv10Visible = false;
            page5InfoVisible = true;
            uploadedImage10.src = null;
            // Save the current state
            savePageStates();
            // Update the display based on the new state
            showStoredPage();
        })
        .catch(error => console.error('Error:', error));
    });
  
  
    //page 5 info 
    var fileInput11 = document.getElementById('fileInput11');
    var captureButton11 = document.getElementById('captureButton11');
    var submitButton11 = document.getElementById('submit-button11');
    var uploadedImage11 = document.getElementById('uploaded-info-5');
  
    var captureDataUrl11 = null;
    var selectedFile11 = null;
  
    fileInput11.addEventListener('change', function () {
        selectedFile11 = fileInput.files[0];
        var reader = new FileReader();
  
        reader.onload = function (e) {
            uploadedImage11.src = e.target.result;
        };
  
        reader.readAsDataURL(selectedFile11);
    });
  
    captureButton11.addEventListener('click', function () {
        chrome.tabs.captureVisibleTab(null, { format: 'png' }, function (dataUrl) {
            captureDataUrl11 = dataUrl;
            uploadedImage11.src = dataUrl;
        });
    });
  
    submitButton11.addEventListener('click', function () {
        var formData = new FormData();
  
        if (captureDataUrl11) {
            formData.append('file', dataURLtoFile(captureDataUrl11, 'screenshot.png'));
        } else if (selectedFile11) {
            formData.append('file', selectedFile11);
        } else {
            console.error('No file or screenshot to upload');
            return;
        }
  
        fetch('http://localhost:5000/upload_i4', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            input11 = true;
            inputDiv11Visible = false;
            page6InfoVisible = true;
            uploadedImage11.src = null;
            // Save the current state
            savePageStates();
            // Update the display based on the new state
            showStoredPage();
        })
        .catch(error => console.error('Error:', error));
    });
  
  
    
  //page 6 info 
  var fileInput12 = document.getElementById('fileInput12');
  // var captureButton7 = document.getElementById('captureButton7');
  var submitButton12 = document.getElementById('submit-button12');
  var uploadedImage12 = document.getElementById('uploaded-info-6');
  var checkbox12 = document.getElementById('error-check2');
  // var captureDataUrl7 = null;
  var selectedFile12 = null;
  var headings = this.getElementsByName('image-page');
  
  fileInput12.addEventListener('change', function () {
      selectedFile12 = fileInput12.files[0];
      var reader = new FileReader();
  
      reader.onload = function (e) {
          uploadedImage12.src = e.target.result;
      };
  
      reader.readAsDataURL(selectedFile12);
  });
  
  submitButton12.addEventListener('click', function () {
      var formData = new FormData();
      var checkboxChecked = checkbox12.checked;
      console.log('checkbox state ',checkboxChecked);
  
      if (!checkboxChecked && !selectedFile12) {
          console.error('No checkbox ticked, file, or screenshot to upload');
          return;
      }
  
      if (selectedFile12) {
          formData.append('file', selectedFile12);
          fetch('http://localhost:5000/upload_i5', {
              method: 'POST',
              body: formData
          })
          .then(response => response.json())
          .then(data => {
              console.log(data);
              input8 = false;
              input9 = false;
              input10 = false;
              input11 = false;
              input12 = false;
              inputDiv12Visible = false;
              uploadedImage12.src = null;
              document.getElementById("ecomm-last").style.display = "block";
              // Save the current state
              savePageStates();
              // Update the display based on the new state
              showStoredPage();
           })
           .catch(error => console.error('Error:', error));
      } else if (checkboxChecked) {
          input8 = false;
          input9 = false;
          input10 = false;
          input11 = false;
          input12 = false;
          inputDiv12Visible = false;
          page2InfoVisible = false;
          page3InfoVisible = false;
          page4InfoVisible = false;
          page5InfoVisible = false;
          page6InfoVisible = false;
          uploadedImage12.src = null;
          headings.forEach(heading => {
              heading.style.display= 'none';
          });
          document.getElementById("ecomm-last").style.display = "block";
          // Save the current state
          savePageStates();
          // Update the display based on the new state
          showStoredPage();
      }
      console.log('making fetch');
      // Make an AJAX request to fetch the results
      fetch('http://localhost:5000/finalresults')
          .then(response => response.json())
          .then(data => {
              // Open dynamic_result.html and pass the data to it
              const popupWindow = window.open('dynamic_result.html', '_blank'); // Open in new tab
              popupWindow.data = data; // Pass the data to the opened window
          })
          .catch(error => console.error('Error:', error));

      
      chrome.storage.sync.clear(function() {
          console.log("Storage cleared");
      });
      
      chrome.storage.sync.clear(function() {
          console.log("Storage cleared");
          });
          
  });
  
  
  });