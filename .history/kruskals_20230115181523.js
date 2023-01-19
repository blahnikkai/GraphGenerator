import {Graph} from "./graph.js";

function kruskals(graph) {
    let edges = graph.edges;
    edges.sort((a, b), b.w - a.w);
}