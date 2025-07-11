// select the DOM elements for output
const year = document.querySelector("#year");
const full = document.querySelector("#last-updated");

// use the date object
const today = new Date();

// set the year to the current year
year.innerHTML = today.getFullYear();

// set the last updated date to a full date format
full.innerHTML = `Last updated: <span class="highlight">${new Intl.DateTimeFormat(
	"en-US",
	{
		dateStyle: "full"
	}
).format(today)}</span>`;