const quotes = [
    {
        quote: "Believe in yourself.",
        author: "Unknown"
    },
    {
        quote: "Stay hungry. Stay foolish.",
        author: "Steve Jobs"
    },
    {
        quote: "Success is not final, failure is not fatal.",
        author: "Winston Churchill"
    },
    {
        quote: "Dream big and dare to fail.",
        author: "Norman Vaughan"
    },
    {
        quote: "The future depends on what you do today.",
        author: "Mahatma Gandhi"
    }
];

const quote = document.getElementById("quote");
const author = document.getElementById("author");
const button = document.getElementById("btn");

function generateQuote() {

    const randomIndex = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[randomIndex].quote;
    author.innerText = "- " + quotes[randomIndex].author;
}

button.addEventListener("click", generateQuote);

generateQuote();