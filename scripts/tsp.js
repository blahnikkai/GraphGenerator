import {euclid_dist} from './script.js'
import {Edge} from './edge.js'

// check long long inf?
const INF = (1 << 20) - 1

function build_2d_array(row_cnt, col_cnt, val) {
    return Array(row_cnt).fill(null).map(() => Array(col_cnt).fill(val))
}

function build_adj_mat(vertices) {
    let adj_mat = build_2d_array(vertices.length, vertices.length, INF)
    for(let i = 0; i < vertices.length; ++i) {
        for(let j = i + 1; j < vertices.length; ++j) {
            const dist = euclid_dist(vertices[i].x, vertices[i].y, vertices[j].x, vertices[j].y)
            adj_mat[i][j] = dist
            adj_mat[j][i] = dist
        }
    }
    return adj_mat
}

function build_path(vertices, nxt) {
    let edges = []
    let subset = 1
    let cur_end = 0
    while(true) {
        let nxt_end = nxt[subset][cur_end]
        edges.push([new Edge(vertices[cur_end], vertices[nxt_end]), 'white'])
        cur_end = nxt_end
        subset |= 1 << cur_end
        if(cur_end == 0 || cur_end == -1)
            break
    }
    edges.push([new Edge(vertices[cur_end], vertices[0]), 'white'])
    return edges
}

export function tsp(vertices) {
    let adj_mat = build_adj_mat(vertices)
    let dp = build_2d_array(1 << vertices.length, vertices.length, INF)
    let nxt = build_2d_array(1 << vertices.length, vertices.length, -1)
    for(let v = 0; v < vertices.length; ++v) {
        dp[dp.length - 1][v] = adj_mat[v][0]
        nxt[dp.length - 1][v] = 0
    }
    for(let s = dp.length - 2; s > 0; --s) {
        for(let v = 0; v < vertices.length; ++v) {
            if((s & (1 << v)) == 0)
                continue
            for(let u = 0; u < vertices.length; ++u) {
                if((s & (1 << u)) == 0) {
                    let alt = adj_mat[v][u] + dp[s | (1 << u)][u]
                    if(alt < dp[s][v]) {
                        dp[s][v] = alt
                        nxt[s][v] = u
                    }
                }
            }
        }
    }
    return build_path(vertices, nxt)
}