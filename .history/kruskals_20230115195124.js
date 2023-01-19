import {DisjointSet} from "./disjoint_set.js";
import {Graph} from "./graph.js";

export function kruskals(graph) {
    let edges = graph.edges;
    edges.sort((a, b) => b.w - a.w);
    let ds = new DisjointSet(edges.length);
    let mst = [];
    for(const edge of edges) {
        if(ds.find(edge.v1.n) == ds.find(edge.v2.n))
            continue;
        mst.push(edge);
        ds.merge(edge.v1.n, edge.v2.n);
    }
    return mst;
}