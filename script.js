const css = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("gradient");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

//These color inputs match the background 
//generated on the first page load, and 
//it displays the initial CSS linear 
//gradient property on page load. 
//setGradient();

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

// Random Colors Selector  
const randomColorButton = document.querySelector('.random-color-button');

randomColorButton.addEventListener('click', () => {
	function randomColorGenerator() {
		const letters = '0123456789ABCDEF';
		let color = '#';
		for (let i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	}

	color1.value = randomColorGenerator()
	color2.value = randomColorGenerator()
	
	setGradient();
}); 
