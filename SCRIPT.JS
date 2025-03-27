function showLoveMessage() {
    alert("💖 You are the love of my life! 💖");
}

// Create floating hearts
const heartContainer = document.querySelector(".hearts");

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";
    heartContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 300);
document.getElementById('surpriseButton').addEventListener('click', function() {
    document.getElementById('message').innerText = "You are the love of my life! 💖";
});
const quotes = [
    "You are my today and all of my tomorrows. 💞",
    "Every love story is beautiful, but ours is my favorite. ❤️",
    "You are the reason I believe in love. 💖",
    "In your arms, I found my home. 🏡💘",
    "Love is not about how many days, months, or years we’ve been together. It’s about how much we love each other every day. 💑"
];

document.getElementById('surpriseButton').addEventListener('click', function() {
    // Show a random love quote
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('message').innerText = randomQuote;

    // Play music
    let music = document.getElementById('loveMusic');
    music.play();

    // Generate heart animation
    createHearts();
});

function createHearts() {
    const container = document.querySelector(".hearts-container");
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    container.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

