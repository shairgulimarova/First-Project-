const myForm = document.querySelector(".form");
const btn = document.querySelector(".btn");
const inputName = document.querySelector('.name');
const email = document.querySelector('.email');
const textarea = document.querySelector('.textarea');
const fields = document.querySelectorAll('.fields');
const error = document.querySelectorAll('.error-message');




// function removeValidation() {
//   var error = document.querySelectorAll(".error");
//   for (let i = 0; i < error.length; i++) {
//     error[i].remove();
//   }
// }

// function generateError(text) {
//   let error = document.createElement('div');
//   error.className = "error";
//   error.style.color = 'red';
//   error.innerHTML = text;
//   return error;
// }

// function checkFieldsPresence() {
//   for (let i = 0; i < fields.length; i++) {
//     if(!fields[i].value){
//       var error = generateError("Fill in the field");
//     fields[i].parentElement.insertBefore(error, fields[i])
//     }    
//   }
// }


// function reload_interval(time){
//   setTimeout(function(){
//     location.reload()
//   }, time)
// }


// myForm.addEventListener('submit', function(event) {
//   event.preventDefault();
//   removeValidation();
//   checkFieldsPresence(); 
//   //reload_interval(2000); 
//   //console.log(event);  
// })

//Constraint Validation API


inputName.addEventListener('input', function() {
  if (inputName.validity.valid) {
    inputName.classList.remove('error');
    inputName.nextElementSibling.classList.remove('show')
  }
})

email.addEventListener('input', function() {
  if (email.validity.valid) {
    email.classList.remove('error');
    email.nextElementSibling.classList.remove("show")
  }
})

textarea.addEventListener('input', function() {
  if (textarea.validity.valid) {
    textarea.classList.remove('error');
    textarea.nextElementSibling.classList.remove("show")
  }
})



myForm.addEventListener('submit', function(event) {
  if (!inputName.validity.valid) {
    inputName.classList.add('error');
    inputName.nextElementSibling.classList.add('show')
    event.preventDefault();
  }

  if (!email.validity.valid) {
    email.classList.add('error');
    email.nextElementSibling.classList.add("show")
    event.preventDefault();
  }

  if (!textarea.validity.valid) {
    textarea.classList.add('error');
    textarea.nextElementSibling.classList.add('show')
    event.preventDefault();
  }
})