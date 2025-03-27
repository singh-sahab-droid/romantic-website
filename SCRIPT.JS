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
