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

