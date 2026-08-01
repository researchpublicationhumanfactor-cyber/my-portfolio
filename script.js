function
welcomeMessage() {
  alert("Welcome to my portfolio website");
}
function hireMe() {
  alert("Hire me button works"); 
  
  document.getElementById("Message").innerHTML =
  "Thank you for your interest! You can contact me using the contact page.";
}
const fadeElements = document.querySelectorAll(".fade-in") ;
function revealsection()
{
  fadeElements.forEach(
    function(element) {
      const position = element.getBouncingClientRect().top;
      const screenPosition = window.innerHeight - 100;
      if (position < screenPosition) {
        element.classList.add("show");
      }
    }
  );
}
window.addEventListener("scroll",revealsection);
window.addEventListener("load",revealsection)

document.getElementById("contactform").addEventListener("submit",function(event) {
  event.preventDefault();
  document.getElementById("successMessage").style.display ="block";
  this.reset();
});


