/* 
Author: Deadeepya Koganti 
Date: 07-04-2025 
File Name: script.js
*/

//Global variables
var video = document.getElementById("example");
var videoSource = document.getElementById("vid-src");
var descriptionSource = document.getElementById("despsrc"); 

//Hamburger menu function 
function hamburger() { 
    var menu = document.getElementById("menu-links");
    var logo = document.getElementById("ffc-logo"); 
    if (menu.style.display === "block" && logo.style.display === "none") { 
        menu.style.display = "none";
        logo.style.display = "block"; 
    } else {
        menu.style.display = "block";
        logo.style.display = "none";
    } 
}   

document.querySelectorAll('.faq-question').forEach(button => {
        button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
    button.classList.toggle('active');
    answer.style.maxHeight = answer.style.maxHeight ? null : answer.scrollHeight + 'px';
    });
});

document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevents actual form submission
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value.trim();

    if (name && email && subject && message) {
      alert("Thanks for reaching out! We’ll get back to you soon.");
      this.reset(); // Clears the form
    } else {
      alert("Please fill out all required fields.");
    }
  });