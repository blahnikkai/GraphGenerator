


function main() {
    console.log("here");
    let canvas = document.querySelector("canvas");
    let ctx = canvas.getContext("2d");
    ctx.fillStyle = "#000000";
    ctx.beginPath();
    ctx.arc(100, 75, 2, 0, 2 * Math.PI);
    ctx.fill();
}

main();