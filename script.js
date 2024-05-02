let currentCard = 1;

function rotateCard() {
    const current = document.getElementById(`card${currentCard}`);
    current.classList.remove('front');

    currentCard++;
    if (currentCard > 3) {
        currentCard = 1;
    }

    const next = document.getElementById(`card${currentCard}`);
    next.classList.add('front');
}
