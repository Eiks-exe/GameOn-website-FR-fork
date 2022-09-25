function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalCross = document.querySelector(".close");


//forms
const form = document.querySelector("#register");
const radioButtons = document.querySelectorAll(".checkbox-input[type=radio]");
const checkboxInput = document.getElementById("checkbox1");

const nameForm = document.querySelector("#first");
const lastForm = document.querySelector("#last");
const emailForm = document.querySelector("#email");
const qForm = document.querySelector("#quantity");
const birthDateForm = document.querySelector("#birthdate")
const checkboxLabel = document.querySelector(".checkboxesContainer")

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
//close modal event

modalCross.addEventListener("click", closeModal);


// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


// close modal function

function closeModal() {
  modalbg.style.display= "none"
}


// validate 

function validate(event){ 
  event.preventDefault();
  removeError()
  isntValid("first")
  isntValid("last")
  isntValid("email")
  isntValid("birthDate")
  isntValid("quantity")
  isntValid("checked")
  isntValid("location")
  if( isntValid("first") || isntValid("last") || isntValid("email") || isntValid("quantity") || isntValid("checked") || isntValid("location") || isntValid("birthDate") ){
    console.log("hmm");
    return false
  } else {
    closeModal();
  }
}

/*
*
*/

function removeError() {
  let errorInputs = document.querySelectorAll('.formData[data-error-visible="true"]')
  errorInputs.forEach(input => {
   input.setAttribute("data-error-visible", false);
   input.setAttribute("data-error", "");
  });
}

function isntValid(input) {
  const validInput = {
    "first" : {
      "input" : nameForm , 
      valid : () => { return nameValidation(nameForm.value) === true},
      "errorMessage": "Veuillez entrer un prénom comportant 2 caractères ou plus."
    },
    "last" : {
      "input" : lastForm ,
      valid: () => {return lastValidation(lastForm.value) === true},
      "errorMessage": "Veuillez entrer un Nom comportant 2 caractères ou plus."
    },
    "email": {
      "input" : emailForm,
      valid: () => {return emailValidation(emailForm.value) === true},
      "errorMessage": "Veuillez entrer une adresse email valide."
    },
    "birthDate" : {
      "input": birthDateForm,
      valid: () => {return birthDateValidation(birthDateForm) === true},
      "errorMessage": "Veuillez entrée une date valide"
    },
    "quantity": {
      "input" : qForm,
      valid: () => {return QuantityValidation(qForm)=== true},
      "errorMessage": "Veuillez entrer un nombre valide"
    },
    "checked":{
      "input" : checkboxInput,
      valid: () => {return checkboxValidation(checkboxInput )=== true},
      "errorMessage": "Veuillez accepter les conditions d'utilisations."
    },
    "location": {
      "input": radioButtons,
      valid : () => {return locationValidation(radioButtons) === true},
      "errorMessage": "Veuillez choisir une position"
    }
  }
  if (!validInput[input].valid()) {
    if(validInput[input].input === radioButtons) {
      checkboxLabel.setAttribute("data-error-visible", true)
      checkboxLabel.setAttribute("data-error", validInput[input].errorMessage)

    }
    console.log("ok",validInput["first"]["input"]["id"])
    validInput[input].input.parentNode.setAttribute("data-error-visible" , true)
    validInput[input].input.parentNode.setAttribute("data-error" , validInput[input].errorMessage)
    console.log(validInput[input].errorMessage);
  }
  else{
    return false;
  }
  inputObject = Object.entries(validInput)
  //console.log(inputObject)
}


// validation rules
function nameValidation(entry) {
  if(entry.length < 2) {
    return false;
  }
    return true;

}

function lastValidation(entry) {
  if(entry.length < 2) {
    return false;
  }
    return true;
} 

function emailValidation(entry) {
  let regex = /^([a-z0-9_\.-]+\@[\da-z\.-]+\.[a-z\.]{2,6})$/;
  return regex.test(entry);
}

function QuantityValidation(entry) {
  console.log(entry.value ,isNaN(entry.value))
  if(!entry.value){
    return false;
  }
  else{
    return true;
  }
}

function locationValidation() {
	for (let radio of radioButtons) {
		if (radio.checked === false) return false;
    return true;
	}
  radioButtons.forEach((radio) => {
    if (!radio.checked) return false;
    return true;
  });
}

function checkboxValidation() {
	return checkboxInput.checked;
}

function birthDateValidation(entry) {
  let reg = /(\d{4})-(\d{2})-(\d{2})/;
  return reg.test(entry.value)
}