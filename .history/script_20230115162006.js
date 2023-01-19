


function canvas_click(event, canvas) {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    alert("x: " + x + " y: " + y);
    
}

function main() {
    const canvas = document.querySelector("canvas");
    canvas.addEventListener("click", (e) => canvas_click(event, canvas, ctx));
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.arc(100, 75, 2, 0, 2 * Math.PI);
    ctx.fill();
}

main();