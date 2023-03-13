function add_sorted(list, edge) {
    let i = 0;
    while(i < list.length && list[i].w >= edge.w)
        ++i;
    list.splice(i, 0, edge);
}

export function prims(adj_list) {
    let added = new Array(adj_list.length).fill(false);
    added[0] = true;
    let pq = [];
    for(const edge of adj_list[0])
        add_sorted(pq, edge);
    let mst = [];
    let considered = [];
    while(pq.length != 0) {
        const new_edge = pq.pop();
        considered.push([new_edge, false]);
        if(added[new_edge.v2.n])
            continue;
        added[new_edge.v2.n] = true;
        considered.push([new_edge, true]);
        mst.push(new_edge);
        for(const adj_edge of adj_list[new_edge.v2.n])
            add_sorted(pq, adj_edge);
    }
    return [mst, considered];
}