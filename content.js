chrome.runtime.onMessage.addListener((msg) => {
  if (msg.type === "FLASHCARD_SAVED") {
    const toast = document.createElement("div");
    toast.textContent = "✅ Flashcard saved!";
    Object.assign(toast.style, {
      position: "fixed", bottom: "20px", right: "20px",
      background: "#222", color: "#fff", padding: "10px 16px",
      borderRadius: "8px", zIndex: 999999, fontFamily: "sans-serif"
    });
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2000);
  }
});