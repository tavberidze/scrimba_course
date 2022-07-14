let homeScore = 0;
let guestScore = 0;

let newGameHome = document.getElementById("home-el");
let newGameGuest = document.getElementById("guest-el");

// home score functions.

function homeAddOne() {
    homeScore += 1;
    document.getElementById("home-el").innerText = homeScore;
}

function homeAddTwo() {
    homeScore += 2;
    document.getElementById("home-el").innerText = homeScore;
}

function homeAddThree() {
    homeScore += 3;
    document.getElementById("home-el").innerText = homeScore;
}

// guest score functions.

function guestAddOne() {
    guestScore += 1;
    document.getElementById("guest-el").innerText = guestScore;
}
function guestAddTwo() {
    guestScore += 2;
    document.getElementById("guest-el").innerText = guestScore;
}
function guestAddThree() {
    guestScore += 3;
    document.getElementById("guest-el").innerText = guestScore;
}

// new game function

function newGame() {
    newGameHome = 0;
    document.getElementById("home-el").innerText = newGameHome;
    newGameGuest = 0;
    document.getElementById("guest-el").textContent = newGameGuest;
}





