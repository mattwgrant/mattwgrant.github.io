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


let quotes = [
	{
		quote: `If you're not first, you're last.`, 
		source: `Ricky Bobby`, 
		citation: `Talladega Nights`, 
		year: `2006`, 
		category: `Movie`
	},
	{
		quote: `You miss 100% of the shots you don't take. -Wayne Gretzky`, 
		source: `Michael Scott`, 
		citation: `The Office`, 
		category: `TV Show`
	},
	{
		quote: `Go home bugs, go to your mommy!`, 
		source: `My friends' two year old daughter`
	},
	{
		quote: `Get your facts first, then you can distort them as you please.`, 
		source: `Mark Twain`, 
		year: `1856` },
	{
		quote: `What's another word for Thesaurus?`, 
		source: `Steven Wright`
	},
	{
		quote: `I refuse to join any club that would have me as a memeber.`, 
		source: `Groucho Marx`, 
		category: `Stand Up Comedy` 
	},
	{
		quote: `If it isn't ol' Two Eyes himself!`, 
		source: `Guy that Eats Steak`, 
		citation: `The Characters`, 
		year: `2018`, 
		category: `TV Show` 
	},
	{
		quote: `That's the crazy part. It could literally have been any of us.`, 
		source: `Man in Hot Dog Suit`, 
		citation: `I Think You Should Leave`, 
		year: `2019`, 
		category: `TV Show` 
	}
];

let colors = [
	`red`,
	`blue`,
	`yellow`,
	`green`,
	`purple`,
	`pink`
];

let newQuote;


/***
 * `getRandomQuote` function
***/


/***
	The function creates a variable (grabQuote) that uses the Math.random function and the length of the quotes array
	to get a random number from 0-7. Using the variable newQuote, it puts the random number in the brackets
	to select the object in that position of the array and then returns the selected quote.
***/

function getRandomQuote() {
		
	let grabQuote = Math.floor(Math.random() * quotes.length);
	newQuote = quotes[grabQuote];
	
	return newQuote
}

/***
	This function is very similar to get RandomQuotes except this one accesses the colors array to change the background color
***/

function getRandomColor() {
	let background = Math.floor(Math.random() * colors.length);
	newColor = colors[background];

	return newColor;
}


/***
 * `printQuote` function
***/

/***
	This function calls the getRandomQuote function in a new variable, randomQuote. Using this information
	it builds a string of HTML in another variable, displayQuote, using the property selector to get each part
	of the object to display. The if statements ensure that as long as the properties specified are not undefined,
	the information from them will be displayed. Finally, the function targets the HTML elements so that the newly
	created string is properly displayed. It also sets a varaible that holds the call for getRandomColor. The next line
	targets the 'container' element to change the background color. All of this is triggered by the click of the button, 
	coded in the pre-written code at the bottom of the page.
***/

function printQuote() {

	
	let randomQuote = getRandomQuote();
	let displayQuote = `<p class="quote">${randomQuote.quote}</p>`;
	displayQuote += `<p class="source">${randomQuote.source}`;
	
	if ( randomQuote.citation !== undefined ) {
		displayQuote += `<span class="citation">${randomQuote.citation}</span>`;
	}

	if ( randomQuote.year !== undefined ) {
		displayQuote += `<span class="year">${randomQuote.year}</span>`;
	}

	if ( randomQuote.category !== undefined ) {
		displayQuote += `<span class="category">${randomQuote.category}</span>`;
	}

	displayQuote += `</p>`;

	document.getElementById('quote-box').innerHTML = displayQuote;

	let backgroundColor = getRandomColor();
	document.querySelector('body').style.backgroundColor = newColor;

}


// This triggers the function printQuote to run every 3 seconds to change the quote and color
setInterval(printQuote, 3000);


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);