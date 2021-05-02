
const form = document.getElementById('form');
const submitButton = document.getElementById('submit');
const email = document.getElementById('email');
const emailError = document.querySelector('#email + span.error');

email.addEventListener('input', function (event) {
    // Each time the user types something, we check if the
    // form fields are valid.
    if (email.validity.valid) {
      // In case there is an error message visible, if the field
      // is valid, we remove the error message.
      emailError.textContent = ''; // Reset the content of the message
      emailError.className = 'error'; // Reset the visual state of the message
    } else {
      // If there is still an error, show the correct error
      showError();
    }
  });

  function showError() {
    if(email.validity.valueMissing) {
      // If the field is empty
      // display the following error message.
      emailError.textContent = 'You need to enter an e-mail address.';
    } else if(email.validity.typeMismatch) {
      // If the field doesn't contain an email address
      // display the following error message.
      emailError.textContent = 'Entered value needs to be an e-mail address.';
    } else if(email.validity.tooShort) {
      // If the data is too short
      // display the following error message.
      emailError.textContent = `Email should be at least ${ email.minLength } characters; you entered ${ email.value.length }.`;
    }
    // Set the styling appropriately
    emailError.className = 'error active';
  }

  submitButton.addEventListener('click', function (event) {
    // if the email field is valid, we let the form submit
    if(!email.validity.valid) {
      // If it isn't, we display an appropriate error message
      showError();
      // Then we prevent the form from being sent by canceling the event
      event.preventDefault();
    }
  });


const country = document.getElementById('country');
const countryError = document.querySelector('#country + span.error');

country.addEventListener('input', function (event) {
    if (country.validity.valid) {
      countryError.textContent = ''; 
      countryError.className = 'error'; 
    } else {
      showCountryError();
    }
  });

  function showCountryError() {
    if(country.validity.valueMissing) {
      countryError.textContent = 'You need to select a country.';
    } 
    countryError.className = 'error active';
  }

  submitButton.addEventListener('click', function (event) {
    if(!country.validity.valid) {
      showCountryError();
      event.preventDefault();
    }
  });


  const zipCode = document.getElementById('zip');
  const zipCodeError = document.querySelector('#zip + span.error');
  
  zipCode.addEventListener('input', function (event) {
    if (zipCode.validity.valid) {
      zipCodeError.textContent = ''; 
      zipCodeError.className = 'error'; 
    } else {
      showZipCodeError();
    }
  });

  function showZipCodeError() {
    if(zipCode.validity.valueMissing) {
      zipCodeError.textContent = 'Please enter a zip code.';
    } else if(zipCode.validity.tooShort) {
      zipCodeError.textContent = 'Zip code needs to be 5 digits long';
    } 
    zipCodeError.className = 'error active';
  }

  
  submitButton.addEventListener('click', function (event) {
    if(!zipCode.validity.valid) {
      showZipCodeError();
      event.preventDefault();
    }
  }); 


const password = document.getElementById('password');
const passwordError = document.querySelector('#password + span.error');

password.addEventListener('input', function (event) {
    if (password.validity.valid) {
      passwordError.textContent = ''; 
      passwordError.className = 'error'; 
    } else {
      showPasswordError();
    }
  });

  function showPasswordError() {
    if(password.validity.valueMissing) {
      passwordError.textContent = 'You need to enter a password';
    } else if(password.validity.typeMismatch) {
      passwordError.textContent = 'Entered value needs to be 8 digits long with one uppercase letter one lowercase letter and a number.';
    } else if(password.validity.tooShort) {
      passwordError.textContent = `Password should be at least ${ password.minLength } characters with one lower case and one uppercase letter;`;
    }
    passwordError.className = 'error active';
  }


  submitButton.addEventListener('click', function (event) {
    if(!password.validity.valid) {
      showPasswordError();
      event.preventDefault();
    }
  }); 

const passwordCon = document.getElementById('passwordcon');
const passwordConError = document.querySelector('#passwordcon + span.error');

passwordCon.addEventListener('input', function (event) {
    if (passwordCon.value === document.getElementById('password').value) {
      passwordConError.textContent = ''; 
      passwordConError.className = 'error';
    } else {
      showPasswordConError();
    }
  });

  function showPasswordConError() {
    if(passwordCon.validity.valueMissing) {
      passwordConError.textContent = 'You need to verify your password';
    } else {
      passwordConError.textContent = 'Passwords dont match';
    } 
    passwordConError.className = 'error active';
  }

  submitButton.addEventListener('click', function (event) {
    if(!passwordCon.validity.valid) {
      showPasswordConError();
      event.preventDefault();
    }
  }); 