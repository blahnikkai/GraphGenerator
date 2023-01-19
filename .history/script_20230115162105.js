let canvas;
let ctx;

function draw_circle(x, y, r) {
    ctx.beginPath();
    ctx.arc(100, 75, 2, 0, 2 * Math.PI);
    ctx.fill();
}

function canvas_click(event) {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    alert("x: " + x + " y: " + y);
    
    
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