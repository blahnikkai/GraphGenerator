import {DisjointSet} from "./disjoint_set.js";

function add_sorted(list, edge) {
    let i = 0;
    while(i < list.length && list[i].w <= edge.w) {
        ++i;
    }
    list.splice(i, 0, element);
}

export function prims(adj_list) {
    let visited = new Array(adj_list.length).fill(false);
    let pq = [];
    for(const edge of adj_list[0]) {
        pq.add_sorted(edge);
    }
    while(pq.length != 0) {
        
    }
}