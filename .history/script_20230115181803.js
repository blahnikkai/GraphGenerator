import {Graph} from "./graph.js";
import {DisjointSet} from "./disjoint_set.js";

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
    let ds = new DisjointSet(10);
    console.log(ds.find(1));
    console.log(ds.find(2));
    console.log(ds.find(3));
    ds.merge(1, 2);
    console.log(ds.find(1));
    console.log(ds.find(2));
    console.log(ds.find(3));
    ds.merge(2, 3);
    graph = new Graph();
    canvas = document.querySelector("canvas");
    canvas.addEventListener("click", (event) => canvas_click(event));
    ctx = canvas.getContext("2d");
}

main();