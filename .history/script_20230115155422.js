


function main() {
    console.log("here");
    let canvas = document.querySelector("canvas");
    let ctx = canvas.getContext("2d");
    ctx.strokeStyle = "#ff0000";
    ctx.lineWidth = 10;
    ctx.fillStyle = "#00ff00";
    ctx.beginPath();
    ctx.arc(100, 75, 50, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
}

main();