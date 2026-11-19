function render() {
  chrome.storage.local.get({ flashcards: [] }, (data) => {
    const list = document.getElementById("list");
    list.innerHTML = "";

    if (data.flashcards.length === 0) {
      list.innerHTML = "<li>No flashcards yet.</li>";
      return;
    }

    data.flashcards.forEach(card => {
      const li = document.createElement("li");
      li.style.display = "flex";
      li.style.justifyContent = "space-between";
      li.style.marginBottom = "6px";

      const span = document.createElement("span");
      span.textContent = card.text;

      const del = document.createElement("button");
      del.textContent = "❌";
      del.onclick = () => {
        chrome.storage.local.get({ flashcards: [] }, (d) => {
          const updated = d.flashcards.filter(c => c.id !== card.id);
          chrome.storage.local.set({ flashcards: updated }, render);
        });
      };

      li.appendChild(span);
      li.appendChild(del);
      list.appendChild(li);
    });
  });
}
render();

document.getElementById("reviewBtn").onclick = () => {
  chrome.tabs.create({ url: chrome.runtime.getURL("review.html") });
};