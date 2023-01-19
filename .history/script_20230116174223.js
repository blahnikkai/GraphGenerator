import {Graph} from "./graph.js";
import {Graphics} from "./graphics.js";
import {kruskals} from "./kruskals.js";
import {prims} from "./prims.js";

const DELAY = 500;

let canvas;
let graphics;
let graph;

function draw_kruskals() {
    for(const vertex of graph.vertices)
        draw_circle(vertex.x, vertex.y);
    const mst = kruskals(graph.edges.slice());
    for(const edge of mst) {
        draw_line(edge.v1.x, edge.v1.y, edge.v2.x, edge.v2.y);
    }
    console.log(graph.edges);
}

function draw_prims() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for(const vertex of graph.vertices)
        draw_circle(vertex.x, vertex.y);
    const mst = prims(graph.adj_list);
    for(const edge of mst) {
        draw_line(edge.v1.x, edge.v1.y, edge.v2.x, edge.v2.y);
    }
    console.log(graph.edges);
}

function canvas_click(event) {
    const rect = canvas.getBoundingClientRect();
    const x = (event.clientX - rect.left) / (rect.right - rect.left) * canvas.width;
    const y = (event.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height;
    graph.add_vertex(x, y);
    graphics.draw_circle(x, y);
}

function main() {
    graph = new Graph();
    canvas = document.querySelector("canvas");
    graphics = new Graphics(canvas);

    canvas.addEventListener("click", (event) => canvas_click(event));

    let kruskals_button = document.getElementById("kruskals_button");
    kruskals_button.addEventListener("click", () => kruskals(graph));

    let prims_button = document.getElementById("prims_button");
    prims_button.addEventListener("click", () => draw_prims());
}

main();