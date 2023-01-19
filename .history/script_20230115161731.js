
function canvas_click(e, rect) {
    alert("clicked!");
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    console.log("x: " + x + " y: " + y)
}

function main() {
    console.log("here");
    const canvas = document.querySelector("canvas");
    canvas.addEventListener("click", (e) => canvas_click(e));
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.arc(100, 75, 2, 0, 2 * Math.PI);
    ctx.fill();
}

main();