const myForm = document.querySelector(".form");
                                                        
const btn = document.querySelector(".btn");
const inputName = document.querySelector('.name');
const email = document.querySelector('.e-mail');
const textarea = document.querySelector('.textarea');
const fields = document.querySelectorAll('.fields');



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




