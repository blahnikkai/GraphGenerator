
function canvas_click() {
    alert("clicked!");
}

function main() {
    console.log("here");
    const canvas = document.querySelector("canvas");
    canvas.addEventListener("click", () => canvas_click());
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.arc(100, 75, 2, 0, 2 * Math.PI);
    ctx.fill();
}

main();