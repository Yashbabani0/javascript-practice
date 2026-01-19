const counterElement = document.querySelector(".counter");
const incrementButton = document.querySelector(".increment");
const decrementButton = document.querySelector(".decrement");
const resetButton = document.querySelector(".reset");

let counter = 0;

incrementButton.addEventListener("click", () => {
  counter++;
  counterElement.textContent = counter;
});
window.addEventListener("keydown", (event) => {
  if (event.key === "+") {
    counter++;
    counterElement.textContent = counter;
  }
});

decrementButton.addEventListener("click", () => {
  if (counter === 0) {
    return;
  }
  counter--;
  counterElement.textContent = counter;
});
window.addEventListener("keydown", (event) => {
  if (event.key === "-") {
    if (counter === 0) {
      return;
    }
    counter--;
    counterElement.textContent = counter;
  }
});

resetButton.addEventListener("click", () => {
  counter = 0;
  counterElement.textContent = counter;
});
window.addEventListener("keydown", (event) => {
  if (event.key.toLowerCase() === "r") {
    counter = 0;
    counterElement.textContent = counter;
  }
});
