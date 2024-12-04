const timerElement = document.getElementById('timer');
const hiddenImage = document.getElementById('hidden-image');
const iceBlock = document.querySelector('.ice-block');

let countdownDate = new Date('December 25, 2024 00:00:00').getTime();
let currentDate = new Date().getTime();
let timeLeft = countdownDate - currentDate;

function formatTime(ms) {
    let days = Math.floor(ms / (1000 * 60 * 60 * 24));
    let hours = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((ms % (1000 * 60)) / 1000);
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

function updateTimer() {
    timeLeft -= 1000;

    if (timeLeft <= 0) {
        timerElement.innerHTML = 'Merry Christmas!';
        hiddenImage.style.opacity = 1;
        triggerEffects();
        clearInterval(timerInterval);
    } else {
        timerElement.innerHTML = `Time until Christmas: ${formatTime(timeLeft)}`;
        // Gradually melt the ice by increasing opacity
        const percentage = Math.min((1 - timeLeft / (countdownDate - currentDate)) * 100, 100);
        hiddenImage.style.opacity = percentage / 100;
    }
}

function triggerEffects() {
    // Add confetti effect
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    document.body.appendChild(confetti);

    // Add snow effect
    const snow = document.createElement('div');
    snow.classList.add('snow');
    document.body.appendChild(snow);

    // Animate confetti and snow (use external libraries if needed)
}

const timerInterval = setInterval(updateTimer, 1000);
