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
let quotes = [
  {
    quote: "Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the Universe trying to produce bigger and better idiots. So far, the Universe is winning.",
    source: "Rick Cook",
    citation: "The Wizardry Compiled"
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
    source: "Mosher's Law of Software Engineering"
  },
  {
    quote: "Measuring programming progress by lines of code is like measuring aircraft building progress by weight.",
    source: "Bill Gates"
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
    source: "Thomas Edison"
  },
  {
    quote: "Computers are good at following instructions, but not at reading your mind.",
    source: "Donald Ervin Knuth",
    citation: "The texbook”, Addison-Wesley Professional",
    year: "1984"
  },
  {
    quote: "One: Demonstrations always crash. And two: The probability of them crashing goes up exponentially with the number of people watching.",
    source: "Steve Jobs",
  },
  {
    quote: "“A user interface is like a joke. If you have to explain it, it’s not that good”..",
    source: "Martin Leblanc",
  },
  {
    quote: 'There are only two industries that refer to their customers as "Users"',
    source: "Edward Tufte",
  }
];
/***
 * `getRandomQuote` function
***/
const getRandomQuote = () => {
  let randomNumber = Math.floor(Math.random() * quotes.length) + 1;
  return quotes[randomNumber]
};
/***
 * `printQuote` function
***/
const printQuote = () => {

  let randomQuote = getRandomQuote();
  let quoteString = `
  <p class="quote"> ${randomQuote.quote} </p>
  <p class="source"> ${randomQuote.source}; 
   if (randomQuote.includes(citation)) {
    <span class="citation"> ${randomQuote.citation} </span>
   };
   if (randomQuote.includes(year)) {
   <span class="year"> ${randomQuote.year} </span>
   };
  </p>`;
  return document.getElementById('quote-box').innerHTML = quoteString; 
  };

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);