let cards = [];
let index = 0;

chrome.storage.local.get({ flashcards: [] }, (data) => {
  cards = data.flashcards;
  if (cards.length === 0) {
    document.getElementById("card").textContent = "No flashcards to review.";
    document.getElementById("nextBtn").style.display = "none";
    return;
  }
  showCard();
});

function showCard() {
  document.getElementById("counter").textContent = `Card ${index + 1} / ${cards.length}`;
  document.getElementById("card").textContent = cards[index].text;
}

document.getElementById("nextBtn").onclick = () => {
  index = (index + 1) % cards.length;
  showCard();
};