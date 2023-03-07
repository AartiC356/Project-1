/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array of 13 objects to store varying property/value pairs
***/
let quotes = [
  {
    quote: "Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the Universe trying to produce bigger and better idiots. So far, the Universe is winning.",
    source: "Rick Cook",
    citation: "The Wizardry Compiled",
 
  },
  {
    quote: "A son asked his father (a programmer) why the sun rises in the east, and sets in the west. His response? It works, don’t touch!",
    source: " u/lugenx",
    year: "2019"
  },
  {
    quote: "There are two ways to write error-free programs, only the third one works.",
    source: "Alan Perlis"
  },
  {
    quote: "A good programmer is someone who always looks both ways before crossing a one-way street.",
    source: "Doug Linder",
    year: "2018"
  },
  {
    quote: "Don't worry if it doesn't work right. If everything did, you'd be out of a job.",
    source: "Mosher's Law of Software Engineering",
    tags: "Motivation, Inspirational"
  },
  {
    quote: "Measuring programming progress by lines of code is like measuring aircraft building progress by weight.",
    source: "Bill Gates",
    tags: "Humor, Programming" 
    
  },
  {
    quote: "Documentation is like sex: when it is good, it is very, very good and when it is bad, it is better than nothing.",
    source: "Francis Irving",
    year: "2011"
  },
  {
    quote: "There are only two kinds of languages: the ones people complain about and the ones nobody uses.",
    source: "Bjarne Stroustrup",
    citation: "The C++ Programming Language"
  },
  {
    quote: "I have not failed. I’ve just found 10,000 ways that won’t work.",
    source: "Thomas Edison",
    tags: "Motivation"
  },
  {
    quote: "Computers are good at following instructions, but not at reading your mind.",
    source: "Donald Ervin Knuth",
    citation: "The texbook”, Addison-Wesley Professional",
    year: "1984",
    tags: "Informative"
  },
  {
    quote: "One: Demonstrations always crash. And two: The probability of them crashing goes up exponentially with the number of people watching.",
    source: "Steve Jobs",
    tags: "Motivation, Humor" 
  },
  {
    quote: "“A user interface is like a joke. If you have to explain it, it’s not that good”..",
    source: "Martin Leblanc"
  },
  {
    quote: 'There are only two industries that refer to their customers as "Users"',
    source: "Edward Tufte",
    tags: "Dark Humor" 
  }
];

/***
 * `randomColor` function loads a new random background color for each quote 
***/
const randomNumber = () => Math.floor(Math.random() * 256) + 1; 

function randomColor () {
 let background = "rgb( randomNumber(), randomNumber(), randomNumber() )";
 return background
};

/***
 * `getRandomQuote` function creates a random number to return random quote object for the `quotes` array
***/
function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * quotes.length) + 1;
  return quotes[randomNumber];
};

/***
 * `printQuote` function uses the `getRandomQuote` function to access the random quote objects, and creates html string to be displayed on the browser
***/
const printQuote = () => {

  let randomQuote = getRandomQuote();
  let quoteString = 
  `<p class="quote"> ${randomQuote.quote} </p>
   <p class="source"> ${randomQuote.source}`;

   if (randomQuote.citation) {
    quoteString += `<span class="citation"> ${randomQuote.citation} </span>`
   };
   if (randomQuote.year) {
    quoteString += `<span class="year"> ${randomQuote.year} </span>`
   };
   if (randomQuote.tags) {
    quoteString += `<span class="tags"> ${randomQuote.tags} </span></p>`
   };

return document.getElementById('quote-box').innerHTML = quoteString; 
   };




/***
 * click event listener for the print quote button to refresh and generate random quote everytime
 * DO NOT CHANGE THE CODE BELOW!!
***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);
