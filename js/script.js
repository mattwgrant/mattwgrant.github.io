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
let newQuote = '';

let quotes = [
	{quote: `If you're not first, you're last.`, source: `Ricky Bobby`, citation: `Talladega Nights`, year: `2006`},
	{quote: `You miss 100% of the shots you don't take. -Wayne Gretzky`, source: `Michael Scott`},
	{quote: `Go home bugs, go to your mommy!`, source: `My friends' two year old daughter`},
	{quote: `Get your facts first, then you can distort them as you please.`, source: `Mark Twain` },
	{quote: `What's another word for Thesaurus?`, source: `Steven Wright`},
	{quote: `I refuse to join any club that would have me as a memeber.`, source: `Groucho Marx` }
];

// citation, year, etc
/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
	// for ( let i = 0; i < quotes.length; i++ ) {
		newQuote = `<p class="quote">${quotes[Math.floor(Math.random() * quotes.length)].quote}</p>`;
		newQuote += `<p class="source">${newQuote.source}</p>`;
		if ( quotes.citation === true && quotes.year === true ) {
			newQuote += `<span class="citation">${newQuote.citation}</span>`;
			newQuote += `<span class="year">${newQuote.year}</span>`;
		} else if ( quotes.citation === true ) {
			newQuote += `<span class="citation">${newQuote.citation}</span>`;
		} else if ( quotes.year === true ) {
		newQuote += `<span class="year">${newQuote.year}</span>`;
		
	}
		
	// }
	return newQuote;
}


/***
 * `printQuote` function
***/

// Selects the ID for where to insert the text generated from the getRandomQuote function

function printQuote() {
	document.getElementById('quote-box').innerHTML = getRandomQuote();
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);