const loginInput = document.getElementById("login");
const form = document.getElementById("login-form");
form.addEventListener("submit", function(event){
event.preventDefault();
console.log(loginInput.value)
const password = loginInput.value;
if (password === "secrete"){
    location.assign("mainpage.html")
}
else{
    alert('Wrong Code!');
}
})

