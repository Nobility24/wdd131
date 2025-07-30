



















const year = document.querySelector("#year");
const full = document.querySelector("#last-updated");
const today = new Date();
year.innerHTML = today.getFullYear();
full.innerHTML = `Last updated: <span class="highlight">${new Intl.DateTimeFormat(
	"en-US",
	{
		dateStyle: "full"
	}
).format(today)}</span>`;