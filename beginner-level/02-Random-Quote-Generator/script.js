const quoteElement = document.getElementById("quote");
const newQuoteButton = document.getElementById("new-quote");
const copyQuoteButton = document.getElementById("copy-quote");

const quotes = [
  "Success is built on consistency, not shortcuts.",
  "Small improvements compound into remarkable results.",
  "Discipline creates the freedom you seek.",
  "Focus on progress, not perfection.",
  "Your future depends on what you do today.",
  "Clarity comes from action, not overthinking.",
  "Great things grow from simple habits.",
  "Patience outperforms talent when talent stops trying.",
  "Momentum is created by showing up every day.",
  "Execution matters more than intention.",
  "Strong foundations prevent future failures.",
  "Learning never exhausts the mind.",
  "Adaptability is the new competitive advantage.",
  "Hard work becomes invisible when it becomes routine.",
  "Consistency beats intensity in the long run.",
  "Confidence is built through preparation.",
  "Growth begins at the edge of discomfort.",
  "Simple systems outperform complex goals.",
  "Long term thinking creates short term discipline.",
  "Your standards define your outcomes.",
];

function getRandomIndex() {
  let randomIndex = Math.floor(Math.random() * quotes.length);
  quoteElement.innerText = quotes[randomIndex];
}
getRandomIndex();

newQuoteButton.addEventListener("click", () => {
  getRandomIndex();
});

copyQuoteButton.addEventListener("click", () => {
  const textToCopy = quoteElement.innerText;
  navigator.clipboard.writeText(textToCopy).then(() => {
    alert("Quote copied to clipboard!");
  });
});

setInterval(() => {
  getRandomIndex();
}, 10000);
