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

//This colour inputs match the background 
//generated on the first page load, and 
//it displays the initial CSS linear 
//gradient property on page load. 
setGradient();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

//I skipped the random generator because 
//I have already done that on Khan Academy. 