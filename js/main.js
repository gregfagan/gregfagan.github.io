var tileSize = 16;
var radius = 0.5;
var ctx = null;

var circleColor = '#F58156';
var backgroundColor = '#0F2A42';

var x = 40; // px
var speed = window.innerWidth; // px / sec
var scale = 1;

function update(dt) {
    x += speed * dt;

    if (x > window.innerWidth) {
        x = 0;
    }
}

function drawBackground (ctx) {
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
}

function drawCircle (ctx) {
    ctx.fillStyle = circleColor;
    ctx.beginPath();
    ctx.arc(x, window.innerHeight - (radius * 1.5 * scale), radius * scale, 0, Math.PI * 2);
    ctx.fill();
}

function drawScene (ctx) {
    drawBackground(ctx);
    drawCircle(ctx);
}

var lastTime = null;
function gameLoop (timeStamp) {
    var dt;

    if (lastTime === null) {
        lastTime = timeStamp;
    }

    dt = (timeStamp - lastTime) / 1000;
    lastTime = timeStamp;

    update(dt);
    drawScene(ctx);
    requestAnimationFrame(gameLoop);
}

function onResize() {
    var canvas = document.getElementById("screen");

    scale = Math.min(
        (window.innerWidth / tileSize).toFixed(),
        (window.innerHeight / tileSize).toFixed()
        );
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx = canvas.getContext('2d');

    ctx.webkitImageSmoothingEnabled = false;
    ctx.mozImageSmoothingEnabled = false;
    ctx.imageSmoothingEnabled = false;
}

window.addEventListener('resize', onResize, false);

window.onload = function () {
    onResize();

    requestAnimationFrame(gameLoop);
};
