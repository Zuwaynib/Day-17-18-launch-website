let seconds = document.querySelector("#second");
let minutes = document.querySelector("#minute");
let hours = document.querySelector("hour");
let days = document.querySelector("day");
let button = document.querySelector("#notify");
let input = document.querySelector("#input");

let secValue = 59;
let   minValue = 59;
let   hourValue = 23;
let  dayValue = 30;

const timeFunction = setInterval(() => {
    secValue--;
    
    if(secValue <  0) {
        secValue = 59;
        minValue--; 
    }

    if(minValue < 0) {
        minValue = 59;
        hourValue--;
    }
    if(hourValue < 0) {
        hourValue = 23;
        dayValue--;
    }
    if(dayValue < 0) {
        clearInterval(timeFunction);
        return;
    }

    seconds.textContent = secValue < 10 ? `0${secValue}` : secValue;
    minutes.textContent = minValue < 10 ? `0${minValue}` : minValue;
    hours.textContent = hourValue < 10 ? `0${hourValue}` : hourValue;
    days.textContent = dayValue < 10 ? `0${dayValue}` : dayValue;
}, 1000);

//function to verify and submit email 
button.addEventListener("click", (e) => {
    e.preventDefault();

    let email = input.value.trim();

    if (email === "") {
        alert("Email cannot be empty!");
        return;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    alert("Email verified successfully!");
});