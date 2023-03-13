import {Graph} from "./graph.js";

let canvas;
let graph;

export function euclid_dist(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

function do_prims() {
    let [mst, considered] = prims(graph.adj_list);
    graphics.draw_process(graph, considered, DELAY);
}

function canvas_click(event) {
    const rect = canvas.getBoundingClientRect();
    const x = (event.clientX - rect.left) / (rect.right - rect.left) * canvas.width;
    const y = (event.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height;
    graph.click(x, y);
}

function main() {
    canvas = document.querySelector("canvas");
    graph = new Graph(canvas);

    canvas.addEventListener("click", (event) => canvas_click(event));

    let kruskals_button = document.getElementById("kruskals_button");
    kruskals_button.addEventListener("click", () => graph.do_kruskals());

    let prims_button = document.getElementById("prims_button");
    prims_button.addEventListener("click", () => graph.do_prims());

    let ch_button = document.getElementById("ch_button");
    ch_button.addEventListener("click", () => graph.do_convex_hull());
}

main();