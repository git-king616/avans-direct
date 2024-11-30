const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const gridSize = 20; // Grootte van een blokje
let snake = [{ x: 300, y: 300 }]; // Startpositie van de slang
let dx = gridSize; // Horizontale snelheid
let dy = 0; // Verticale snelheid
let food = randomFoodPosition();
let score = 0;
let speed = 150; // Startgame snelheid in milliseconden

// Tekent de slang
function drawSnake() {
    snake.forEach(segment => {
        ctx.fillStyle = '#0f0'; // Groen
        ctx.fillRect(segment.x, segment.y, gridSize, gridSize);
    });
}

// Beweegt de slang
function moveSnake() {
    const head = { x: snake[0].x + dx, y: snake[0].y + dy };
    snake.unshift(head);

    // Controleert of de slang voedsel eet
    if (head.x === food.x && head.y === food.y) {
        score++;
        speed = Math.max(speed - 5, 50); // Verhoog de snelheid na elke hap, met een minimum van 50ms
        food = randomFoodPosition();
    } else {
        snake.pop(); // Verwijder het laatste segment als er geen voedsel wordt gegeten
    }
}

// Genereert een willekeurige positie voor voedsel
function randomFoodPosition() {
    const x = Math.floor(Math.random() * canvas.width / gridSize) * gridSize;
    const y = Math.floor(Math.random() * canvas.height / gridSize) * gridSize;
    return { x, y };
}

// Tekent voedsel
function drawFood() {
    ctx.fillStyle = '#f00'; // Rood
    ctx.fillRect(food.x, food.y, gridSize, gridSize);
}

// Schoon canvas
function clearCanvas() {
    ctx.fillStyle = '#000'; // Zwart
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// Verandert de richting van de slang
function changeDirection(event) {
    const key = event.keyCode;
    if (key === 37 && dx === 0) { // Pijltje links
        dx = -gridSize;
        dy = 0;
    } else if (key === 38 && dy === 0) { // Pijltje omhoog
        dx = 0;
        dy = -gridSize;
    } else if (key === 39 && dx === 0) { // Pijltje rechts
        dx = gridSize;
        dy = 0;
    } else if (key === 40 && dy === 0) { // Pijltje omlaag
        dx = 0;
        dy = gridSize;
    }
}

// Controleert of de slang botst
function checkCollision() {
    const head = snake[0];
    // Controleer of de slang tegen de muur botst
    if (
        head.x < 0 || head.x >= canvas.width ||
        head.y < 0 || head.y >= canvas.height ||
        snake.slice(1).some(segment => segment.x === head.x && segment.y === head.y)
    ) {
        window.location.href = '/assets/snakedies.gif'; // Verwijs naar het gifje bij verlies
    }
}

// Hoofdgame-loop
function main() {
    setTimeout(() => {
        clearCanvas();
        drawFood();
        moveSnake();
        drawSnake();
        checkCollision();
        main();
    }, speed); // Snelheid van de game
}

// Start het spel
document.addEventListener('keydown', changeDirection);
main();
