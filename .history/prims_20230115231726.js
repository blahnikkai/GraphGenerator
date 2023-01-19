import {DisjointSet} from "./disjoint_set.js";

function add_sorted(list, edge) {
    let i = 0;
    while(i < list.length && list[i].w >= edge.w)
        ++i;
    list.splice(i, 0, edge);
}

export function prims(adj_list) {
    let visited = new Array(adj_list.length).fill(false);
    let pq = [];
    for(const edge of adj_list[0])
        pq.add_sorted(edge);
    let mst = [];
    while(pq.length != 0) {
        const new_edge = pq.pop();
        if(visited[new_edge.v2.n])
            continue;
        visited[new_edge.v2.n] = true;
        for(const adj of adj_list[new_edge.v2.n]) {

        }
    }
}