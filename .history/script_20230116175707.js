import {Graph} from "./graph.js";
import {Graphics} from "./graphics.js";
import {kruskals} from "./kruskals.js";
import {prims} from "./prims.js";

const DELAY = 500;

let canvas;
let graphics;
let graph;

function do_kruskals() {
    let [mst, considered] = kruskals(graph.edges.slice());
    graphics.draw_process(graph, considered);
}

function do_prims() {
    let [mst, considered] = kruskals(graph.adj_list);
    graphics.draw_process(graph, considered);
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
    kruskals_button.addEventListener("click", () => do_kruskals());

    let prims_button = document.getElementById("prims_button");
    prims_button.addEventListener("click", () => do_prims());
}

main();