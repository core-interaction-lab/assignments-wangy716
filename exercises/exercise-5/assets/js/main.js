let myButton = document.getElementById("btn-1");
const myButton2 = document.querySelector(".btn") 
const allButtons = document.querySelectorAll(".btn")
var copy = ("the is my var");

console.log(myButton);
console.log(allButtons);

myButton.addEventListener("click", function(event){
    alert("I clicked")
});