


function main() {
    console.log("here");
    let canvas = document.querySelector("canvas");
    let ctx = canvas.getContext("2d");
    ctx.strokeStyle = "#FF0000";
    ctx.beginPath();
    ctx.arc(100, 75, 50, 0, 2 * Math.PI);
    ctx.fill();
}

main();