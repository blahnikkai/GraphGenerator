import {DisjointSet} from "./disjoint_set.js";

export function kruskals(graphics, delay, graph) {
    edges = graph.edges.slice();
    edges.sort((a, b) => a.w - b.w);
    let ds = new DisjointSet(edges.length);
    let mst = [];
    let i = 0;
    const step = () => {
        if(i >= edges.length)
            return;
        const edge = edges[i];
        graphics.draw_edge(edge, "blue");
        if(ds.find(edge.v1.n) === ds.find(edge.v2.n)) {
            graphics.clear();
            graphics.draw_vertices(graph.vertices);
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