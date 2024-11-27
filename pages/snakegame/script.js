const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const gridSize = 20;
let snake = [{ x: 200, y: 200 }];
let dx = gridSize;
let dy = 0;
let food = randomFoodPosition();
let score = 0;

function drawSnake() {
    snake.forEach(segment => {
        ctx.fillStyle = '#0f0';
        ctx.fillRect(segment.x, segment.y, gridSize, gridSize);
    });
}

function moveSnake() {
    const head = { x: snake[0].x + dx, y: snake[0].y + dy };
    snake.unshift(head);

    if (head.x === food.x && head.y === food.y) {
        score++;
        food = randomFoodPosition();
    } else {
        snake.pop();
    }
}

function randomFoodPosition() {
    const x = Math.floor(Math.random() * canvas.width / gridSize) * gridSize;
    const y = Math.floor(Math.random() * canvas.height / gridSize) * gridSize;
    return { x, y };
}

function drawFood() {
    ctx.fillStyle = '#f00';
    ctx.fillRect(food.x, food.y, gridSize, gridSize);
}

function clearCanvas() {
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function changeDirection(event) {
    const key = event.keyCode;
    if (key === 37 && dx === 0) { dx = -gridSize; dy = 0; }
    else if (key === 38 && dy === 0) { dx = 0; dy = -gridSize; }
    else if (key === 39 && dx === 0) { dx = gridSize; dy = 0; }
    else if (key === 40 && dy === 0) { dx = 0; dy = gridSize; }
}

function checkCollision() {
    const head = snake[0];
    if (
        head.x < 0 || head.x >= canvas.width ||
        head.y < 0 || head.y >= canvas.height ||
        snake.slice(1).some(segment => segment.x === head.x && segment.y === head.y)
    ) {
        window.location.href = '/assets/snakedies.gif';
    }
}

function main() {
    setTimeout(() => {
        clearCanvas();
        drawFood();
        moveSnake();
        drawSnake();
        checkCollision();
        main();
    }, 100);
}

document.addEventListener('keydown', changeDirection);
main();
