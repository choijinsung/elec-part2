const basketFromEl = document.querySelector("header .basket-from");
const basketEl = basketFromEl.querySelector(".basket");

basketFromEl.addEventListener("click", function(event) {
  event.stopPropagation();
  if (basketEl.classList.contains("show")) {
    hideBasket();
  } else {
    showBasket();
  }
});
basketEl.addEventListener("click", function(event) {
  event.stopPropagation();
});
window.addEventListener("click", function() {
  basketEl.classList.remove("show");
});

function showBasket() {
  basketEl.classList.add("show");
}
function hideBasket() {
  basketEl.classList.remove("show");
}