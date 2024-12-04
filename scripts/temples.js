const hamButton = document.querySelector("#menu");
const navigation = document.querySelector("nav");

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

// get current year
const currentYear = document.getElementById("currentyear");
currentYear.innerText = new Date().getFullYear();

document.querySelector("#lastModified").innerHTML = `Last modified: ${document.lastModified}`;

document.getElementById("currentdate").innerText = new Date().getFullYear();