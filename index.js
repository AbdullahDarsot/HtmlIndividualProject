/*
let submitForm = () => {
     document.getElementById('submit').style.color= 'green';
 }
let btn = document.getElementById('submit');

 let submitForm = () => {
     btn.classList.remove("color1")
     btn.classList.add("color2")
   }
  
 let myFunction = () => {
   document.getElementById('change').innerHTML = 'Submitted';
 }
*/

//removes form once its been submitted
function myFunction() {
    var myobj = document.getElementById("form1");
    myobj.remove();
    alert("Submitted");
  }




