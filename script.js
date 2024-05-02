// Define your quotes
var quotes = "My quote 1|||My quote 2|||My quote 3|||My quote 4|||My quote 5";

// Split the quotes into an array
var quotesArray = quotes.split("|||");

// Get the container
var container = document.getElementById("cardContainer");

// Populate quotes into cards
quotesArray.forEach(function(quote, index) {
    var card = document.createElement("div");
    card.classList.add("cards");
    card.innerText = quote;
    card.style.display = index === 0 ? "block" : "none"; // Show first card, hide others
    container.appendChild(card);
});

// Keep track of current card index
var currentCardIndex = 0;

// Get all cards
var cards = document.getElementsByClassName("cards");

// Function to rotate cards
function rotateCard() {
    cards[currentCardIndex].style.display = "none"; // Hide current card
    currentCardIndex = (currentCardIndex + 1) % cards.length; // Get next card index
    cards[currentCardIndex].style.display = "block"; // Show next card
}
