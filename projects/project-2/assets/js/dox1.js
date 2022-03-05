const stay = document.querySelectorAll(".redaction");
stay.forEach(function(element){
    element.addEventListener("click", function(){
        element.classList.toggle("redaction-active");
    })
})





window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
};