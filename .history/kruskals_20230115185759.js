import { DisjointSet } from "./disjoint_set.js";
import {Graph} from "./graph.js";

function kruskals(graph) {
    let edges = graph.edges;
    edges.sort((a, b), b.w - a.w);
    let ds = new DisjointSet(edges.length);
    for(const edge of edges) {
        
    }
}