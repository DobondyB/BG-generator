var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
    body.style.background = 
    "linear-gradient(to right, "
     + color1.value 
     + ", " 
     + color2.value 
     + ")";

     css.textContent = body.style.background + ";";
}

function randomizeColors() { // Új függvény a véletlenszerű színekhez
    var randomColor1 = "#" + Math.floor(Math.random()*16777215).toString(16);
    var randomColor2 = "#" + Math.floor(Math.random()*16777215).toString(16);
    color1.value = randomColor1;
    color2.value = randomColor2;
    setGradient(); // Hívjuk meg a setGradient függvényt az új színek alkalmazásához
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randomizeButton.addEventListener("click", randomizeColors); // Hozzáadjuk a gombhoz az eseménykezelőt