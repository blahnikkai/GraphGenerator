


function main() {
    console.log("here");
    let canvas = document.querySelector("canvas");
    canvas.addEventListener("click", () => canvas_click());
    let ctx = canvas.getContext("2d");
    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.arc(100, 75, 2, 0, 2 * Math.PI);
    ctx.fill();
}

main();