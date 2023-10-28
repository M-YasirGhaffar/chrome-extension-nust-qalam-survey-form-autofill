// Add this code to your content.js
function dismissPopup() {
    // Function to dismiss the alert
    function dismiss() {
      window.confirm = function () {
        return true; // Simulate a user pressing "OK"
      };
    }
  
    // Periodically check for the alert and dismiss it
    const checkInterval = setInterval(() => {
      if (window.confirm) {
        dismiss();
      } else {
        clearInterval(checkInterval); // Stop checking once the alert is gone
      }
    }, 1000); // Check every 1 second
  }
  
  // Call the function to dismiss the popup
  dismissPopup();
  

// Add this code in your content.js
function simulateHumanDelay() {
    // Generate a random delay between 1 to 3 seconds
    const delay = Math.floor(Math.random() * (3000 - 1000) + 1000);
  
    setTimeout(() => {
      // Perform an action, e.g., click a button, fill a form, etc.
      // Add your code for the action here
    }, delay);
  }
  
  // Call the function to simulate human-like delays
  simulateHumanDelay();

  // Add this code in your content.js
function dismissPopup() {
    // Check if an alert dialog is currently open
    if (window.confirm) {
      window.confirm = function () {
        return true; // Simulate a user pressing "OK"
      };
    }
  }
  
  // Call the function to dismiss the popup
  dismissPopup();


// Function to set the slider input value and mark as "Excellent"
function setSliderValueAndLabel(label) {
    const labels = document.querySelectorAll(`.datalist2 [label="${label}"]`);

// const labels = document.querySelectorAll(`.datalist2 [label="${label}"]`);
    labels.forEach((element) => {
      element.previousElementSibling.checked = true;
      const slider = element.parentElement.nextElementSibling.querySelector('.slider');
      slider.value = 1;
  
      // Trigger a change event on the slider to simulate user interaction
      const event = new Event('change', {
        bubbles: true,
        cancelable: true,
      });
      slider.dispatchEvent(event);
    });
  }
  
  // Function to ensure all hidden required radio buttons are checked
  function ensureAllHiddenRadioButtonsChecked() {
    const hiddenRequiredRadios = document.querySelectorAll('input[type="radio"][required="True"][style="display:none"]');
    hiddenRequiredRadios.forEach((radio) => {
      const group = document.getElementsByName(radio.name);
      const isChecked = Array.from(group).some((btn) => btn.checked);
      if (!isChecked) {
        group[0].checked = true;  // Check the first radio of the group by default
      }
    });
  }
  
  // Function to fill the textarea with "Good teacher"
  function fillTextarea() {
    const textarea = document.getElementById("description");
    textarea.value = "Good teacher";
  }
  
  // Function to submit the form with a delay
  function submitFormWithDelay() {
    const form = document.getElementById("custom_form");
    const submitButton = form.querySelector('button[type="submit"]');
  
    // Trigger a click event on the submit button to submit the form
    const event = new MouseEvent('click', {
      view: window,
      bubbles: true,
      cancelable: true,
    });
    submitButton.dispatchEvent(event);
  }
  
  // Fill all the sliders with value 1 and label as "Excellent"
  setSliderValueAndLabel("Excellent");
  
  // Ensure all hidden required radio buttons are checked
  ensureAllHiddenRadioButtonsChecked();
  
  // Fill the textarea with "Good teacher"
  fillTextarea();
  
  // Submit the form with a 1-second delay
  setTimeout(submitFormWithDelay, 1000);
  