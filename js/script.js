/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
// empty variable to store my information from getRandomQuote in
let newQuote = '';

let quotes = [
	{quote: `If you're not first, you're last.`, source: `Ricky Bobby`, citation: `Talladega Nights`, year: `2006`},
	{quote: `You miss 100% of the shots you don't take. -Wayne Gretzky`, source: `Michael Scott`, citation: `The Office`},
	{quote: `Go home bugs, go to your mommy!`, source: `My friends' two year old daughter`},
	{quote: `Get your facts first, then you can distort them as you please.`, source: `Mark Twain`, year: `1856` },
	{quote: `What's another word for Thesaurus?`, source: `Steven Wright`},
	{quote: `I refuse to join any club that would have me as a memeber.`, source: `Groucho Marx` }
];

// citation, year, etc
/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
	
		// variable gets a random number from 0-5 that is then used to assign which quote object is selected and displayed
		// it then uses the variable to get the source attached to the same object to also display
		// the variable that stores the information, newQuote, is then returned at the end to be used later in the program
		// the if statement checks to see if the objects have a citation or year property that are not undefined
		// using null caused all quotes to have an "undefined" for citation and year whereas checking that they are not 
		// undefined makes something only show up if there is a property and a value that matches this
		let grabQuote = Math.floor(Math.random() * quotes.length);
		newQuote = `<p class="quote">${quotes[grabQuote].quote}</p>`;
		newQuote += `<p class="source">${quotes[grabQuote].source}`;
		if ( quotes[grabQuote].citation !== undefined && quotes[grabQuote].year !== undefined ) {
			newQuote += `<span class="citation">${quotes[grabQuote].citation}</span>`;
			newQuote += `<span class="year">${quotes[grabQuote].year}</span></p>`;
		} else if ( quotes[grabQuote].citation !== undefined ) {
			newQuote += `<span class="citation">${quotes[grabQuote].citation}</span></p>`;
		} else if ( quotes[grabQuote].year !== undefined ) {
		newQuote += `<span class="year">${quotes[grabQuote].year}</span></p>`;
		} else {
			newQuote += `</p>`;
		}
		
	
		
	
	return newQuote;
}


/***
 * `printQuote` function
***/

// Selects the ID for where to insert the text generated from the getRandomQuote function

// this function targets the class 'quote-box' so that when the button is clicked, this function is called and it takes
// the information generated in the getRandomQuote function and displays it to the page
function printQuote() {
	let printHTML = getRandomQuote();
	document.getElementById('quote-box').innerHTML = printHTML;
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);