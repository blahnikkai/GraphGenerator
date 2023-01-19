import {Graph} from "./graph.js";
import {kruskals} from "./kruskals.js";

let canvas;
let ctx;
let graph;

const RADIUS = 5;

function draw_circle(x, y) {
    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.arc(x, y, RADIUS, 0, 2 * Math.PI);
    ctx.fill();
}

function canvas_click(event) {
    const rect = canvas.getBoundingClientRect();
    const x = (event.clientX - rect.left) / (rect.right - rect.left) * canvas.width;
    const y = (event.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height;
    graph.add_vertex(x, y);
    draw_circle(x, y);
}

function main() {
    graph = new Graph();
    canvas = document.querySelector("canvas");
    ctx = canvas.getContext("2d");

    canvas.addEventListener("click", (event) => canvas_click(event));

    let kruskals_button = document.getElementById("kruskals_button");
    kruskals_button.addEventListener("click", console.log(() => kruskals(graph));

}

main();