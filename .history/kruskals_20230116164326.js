import {DisjointSet} from "./disjoint_set.js";

export function kruskals(graphics, delay, edges) {
    edges.sort((a, b) => a.w - b.w);
    let ds = new DisjointSet(edges.length);
    let mst = [];
    let i = 0;
    function step() {
        if(i >= edges.length)
            return;
        const edge = edges[i];
        graphics.draw_line(edge.v1.x, edge.v1.y, edge.v2.x, edge.v2.y, "blue");
        if(ds.find(edge.v1.n) === ds.find(edge.v2.n)) {
            graphics.clear();
            
            step();
        }
        mst.push(edge);
        ds.merge(edge.v1.n, edge.v2.n);
        ++i;
        setTimeout(() => step(), delay);
    }
    step();
    return mst;
}