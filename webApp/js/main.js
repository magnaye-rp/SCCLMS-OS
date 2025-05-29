const tgglButton = document.getElementById("theme-toggle-btn");
const body = document.body;

function switchToNightMode() {
  body.classList.add("night-mode");
}

tgglButton.addEventListener("click", () => {
  switchToNightMode();
});
