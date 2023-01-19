import {Vertex} from "./vertex.js";

let canvas;
let ctx;
let vertices;

function draw_circle(x, y, r) {
    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fill();
}

function canvas_click(event) {
    const rect = canvas.getBoundingClientRect();
    const x = (event.clientX - rect.left) / (rect.right - rect.left) * canvas.width;
    const y = (event.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height;
    vertices.push(new Vertex(x, y));
    console.log(vertices);
    draw_circle(x, y, 5);
}

function main() {
    vertices = [];
    canvas = document.querySelector("canvas");
    canvas.addEventListener("click", (event) => canvas_click(event));
    ctx = canvas.getContext("2d");
}

main();