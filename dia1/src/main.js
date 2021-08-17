const link = document.querySelector('[data-js="change-visibility"]');
const div = document.querySelector('[data-js="app"]');

link.addEventListener("click", (event) => {
  event.preventDefault();
  div.style.display === "none"
    ? (div.style.display = "block")
    : (div.style.display = "none");
  }, false);
