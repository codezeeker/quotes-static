// Function to fetch and parse the quotes file
async function loadQuotes() {
  try {
    const response = await fetch('quotes.md');
    const text = await response.text();
    // Split the text by the separator
    const quotes = text.split('---').map(quote => quote.trim()).filter(quote => quote);
    return quotes;
  } catch (error) {
    console.error('Error loading quotes:', error);
    return ["Error loading quotes. Please try again."];
  }
}

// Variable to store the quotes
let quotesArray = [];

// Function to display a random quote
function displayRandomQuote() {
  if (quotesArray.length === 0) return;
  
  const randomIndex = Math.floor(Math.random() * quotesArray.length);
  const quoteElement = document.getElementById('quote-text');
  if (quoteElement) {
    quoteElement.textContent = quotesArray[randomIndex];
  }
}

// Initialize the quotes and display a random one on page load
window.addEventListener('DOMContentLoaded', async () => {
  quotesArray = await loadQuotes();
  displayRandomQuote();
  
  // Add click event listener to the button
  const quoteButton = document.getElementById('new-quote-btn');
  if (quoteButton) {
    quoteButton.addEventListener('click', displayRandomQuote);
  }
});
