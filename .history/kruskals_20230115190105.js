import {DisjointSet} from "./disjoint_set.js";
import {Graph} from "./graph.js";

function kruskals(graph) {
    let edges = graph.edges;
    edges.sort((a, b), b.w - a.w);
    let ds = new DisjointSet(edges.length);
    let mst = [];
    for(const edge of edges) {
        if(ds.find(edge.v1.n) == ds.find(edge.v2.n))
            continue;
        mst.push(edge);
    }
    return mst;
}