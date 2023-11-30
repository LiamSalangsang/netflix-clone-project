

function checkInput() {
    var inputField = document.getElementById("emailsubmission");
    var inputValue = inputField.value.trim();
  
    if (inputValue === '') {
      inputField.focus();
      return false; // Prevent form submission if the input is empty
    }
    return true; // Allow form submission if the input is not empty
    
  
  }
  

  