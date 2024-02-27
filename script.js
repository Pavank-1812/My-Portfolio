let bars = document.querySelector(".nav .fa-bars");
let menu = document.querySelector("ul");
bars.addEventListener("click", function(){
    menu.classList.toggle("show");
})

//made my role as dynamic text
const headingText = "Frontend Developer";
const Welcome = "Hey👋! Welcome to My Portfolio";
const headingTypingSpeed = 110; // Typing speed for heading
const welcomeTypingSpeed = 60; // Typing speed for welcome message
let headingIndex = 0;
let welcomeIndex = 0;

function typeHeading() {
    if (headingIndex < headingText.length) {
        // Display cursor
        document.getElementById("typing-heading").innerHTML += "|";
        setTimeout(function() {
            // Display character
            document.getElementById("typing-heading").innerHTML = headingText.substring(0, headingIndex + 1);
            setTimeout(function() {
                // Remove cursor
                document.getElementById("typing-heading").innerHTML = headingText.substring(0, headingIndex + 1).replace('|', '');
                headingIndex++;
                // Call typeHeading again for the next character
                setTimeout(typeHeading, headingTypingSpeed);
            }, headingTypingSpeed);
        }, headingTypingSpeed);
    }
}

function welcome() {
    if (welcomeIndex < Welcome.length) {
        // Display cursor
        document.getElementById("WELCOME").innerHTML += "|";
        setTimeout(function() {
            // Display character
            document.getElementById("WELCOME").innerHTML = Welcome.substring(0, welcomeIndex + 1);
            setTimeout(function() {
                // Remove cursor
                document.getElementById("WELCOME").innerHTML = Welcome.substring(0, welcomeIndex + 1).replace('|', '');
                welcomeIndex++;
                // Call welcome again for the next character
                setTimeout(welcome, welcomeTypingSpeed);
            }, welcomeTypingSpeed);
        }, welcomeTypingSpeed);
    }
}

// Start typing the heading and welcome message when the page loads
window.onload = function() {
    typeHeading();
    welcome();
};



