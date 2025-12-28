// REASONS
const reasons = [
    "Your smile feels like home",
    "You understand me",
    "You make ordinary days perfect",
    "You are my peace",
    "You chose me",
    "I love You no matter what"
];

function newReason() {
    const random = Math.floor(Math.random() * reasons.length);
    document.getElementById("reason").innerText = reasons[random];
}

// COUNTDOWN (CHANGE DATE)
const targetDate = new Date("2026-05-24");

setInterval(() => {
    const now = new Date();
    const diff = targetDate - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    document.getElementById("timer").innerText =
        days + " days until uu are my wife  forever 💍";
}, 1000);
ddocument.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("revealBtn");
    const container = document.getElementById("videoContainer");

    btn.addEventListener("click", () => {
        if (container.classList.contains("show")) {
            container.classList.remove("show");
        } else {
            container.classList.add("show");
            container.scrollIntoView({ behavior: "smooth" });
        }
    });
});




