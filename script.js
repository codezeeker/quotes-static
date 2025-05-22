// Array of beautiful gradient backgrounds
const gradients = [
  'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
  'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)',
  'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  'linear-gradient(135deg, #fad0c4 0%, #ffd1ff 100%)',
  'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)',
  'linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)',
  'linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)',
  'linear-gradient(135deg, #cfd9df 0%, #e2ebf0 100%)',
  'linear-gradient(135deg, #a6c0fe 0%, #f68084 100%)',
  'linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)'
];

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
    return [
      "The journey of a thousand miles begins with one step.",
      "The only way to do great work is to love what you do.",
      "Believe you can and you're halfway there."
    ];
  }
}

// Variable to store the quotes
let quotesArray = [];

// Function to change background gradient
function changeBackground() {
  const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];
  document.body.style.background = randomGradient;
}

// Function to display a random quote
function displayRandomQuote() {
  if (quotesArray.length === 0) return;
  
  const randomIndex = Math.floor(Math.random() * quotesArray.length);
  const quoteElement = document.getElementById('quote-text');
  
  if (quoteElement) {
    // Add fade-out effect
    quoteElement.style.opacity = 0;
    
    setTimeout(() => {
      quoteElement.textContent = quotesArray[randomIndex];
      // Change background with each new quote
      changeBackground();
      // Add fade-in effect
      quoteElement.style.opacity = 1;
    }, 300);
  }
}

// Initialize the quotes and display a random one on page load
window.addEventListener('DOMContentLoaded', async () => {
  // Set initial transition for the quote text
  const quoteElement = document.getElementById('quote-text');
  if (quoteElement) {
    quoteElement.style.transition = 'opacity 0.3s ease';
  }
  
  quotesArray = await loadQuotes();
  displayRandomQuote();
  
  // Add click event listener to the button
  const quoteButton = document.getElementById('new-quote-btn');
  if (quoteButton) {
    quoteButton.addEventListener('click', displayRandomQuote);
  }
});
