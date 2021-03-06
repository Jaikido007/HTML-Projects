const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const showNewQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

let apiQuotes = []; // Using let not const because it's an empty array to start, which gets passed results from api changing it's value - use const if never changing

function showLoadingSpinner() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

function removeLoadingSpinner() {
    quoteContainer.hidden = false;
    loader.hidden = true;
}

function showNewQuote() {
    showLoadingSpinner();
    // Pick a random quote from apiQuotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    // Check if Author field is blank and replace with 'Unknown'
    if (!quote.author) {
        authorText.textContent = 'Unknown';
    } else {
        authorText.textContent = quote.author;
    }
    // Check Quote length to determine the styling

    if (quote.text.length > 120) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote')
    }
    // Set Quote, Hide Laoder
    quoteText.textContent = quote.text;
    removeLoadingSpinner();
}

// asynchronous function can run anytime independently and doesn't affect the loading of a page
async function getQuoteFromApi() { 
    showLoadingSpinner();
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiUrl); // The const will not be populated until it has data fetched from api
        apiQuotes = await response.json(); // Get json from api as a response - turn into object and pass into global var called apiQuotes
        showNewQuote();
    } catch (error) {
        // Catch Error Here
    }
}

function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}` // Template string (back-ticks) allows a variable  to be passed in and converted to a string.  ? shows a query paramter, which is called text which will be equal to a variable ${}
    window.open(twitterUrl, '_blank'); //_blank window.open allows a window to open with a new tab.
}

// Event Listeners (std practice to place at bottom of page)
    showNewQuoteBtn.addEventListener('click', showNewQuote);
    twitterBtn.addEventListener('click', tweetQuote);

// On Load ------

getQuoteFromApi()

