import {DisjointSet} from "./disjoint_set.js";

export function kruskals(edges) {
    edges.sort((a, b) => a.w - b.w);
    let ds = new DisjointSet(edges.length);
    let mst = [];
    let considered = [];
    for(const edge of edges) {
        considered.push([edge, false]);
        if(ds.find(edge.v1.n) === ds.find(edge.v2.n))
            continue;
        considered.push([edge, true]);
        mst.push(edge);
        ds.merge(edge.v1.n, edge.v2.n);
    }
    return mst;
}