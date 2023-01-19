let canvas;
let ctx;

function draw_circle(x, y, r) {
    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fill();
}

function canvas_click(event) {
    const bound = canvas.getBoundingClientRect();
    const x = event.clientX - bound.left - canvas.clientLeft;
    const y = event.clientY - bound.top - canvas.clientTop;
    draw_circle(x, y, 2);
}

function main() {
    canvas = document.querySelector("canvas");
    canvas.addEventListener("click", (e) => canvas_click(event, canvas, ctx));
    ctx = canvas.getContext("2d");
    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.arc(100, 75, 2, 0, 2 * Math.PI);
    ctx.fill();
}

main();