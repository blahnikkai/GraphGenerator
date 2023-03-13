import {Edge} from './edge.js';

function cross(x1, y1, x2, y2) {
    return x1 * y2 - x2 * y1;
}

function ccw(p, q, r) {
    return cross(r.x - q.x, r.y - q.y, p.x - q.x, p.y - q.y) > 0;
}

export function convex_hull(vertices) {
    let mn_ind = 0;
    for(let i = 1; i < vertices.length; i++) {
        if(vertices[i].y > vertices[mn_ind].y 
            || vertices[i].y === vertices[mn_ind].y && vertices[i].x < vertices[mn_ind].x) {
            mn_ind = i;
        }
    }
    console.log(mn_ind);
    let bot_left = vertices[mn_ind];
    vertices.splice(mn_ind, 1);
    vertices.sort((v1, v2) => {
        if(ccw(bot_left, v1, v2))
            return 1;
        return -1;
    });
    let hull = [vertices[vertices.length - 1], bot_left, vertices[0]];
    let states = [];
    let cur_state = [];
    cur_state.push([new Edge(hull[0], hull[1]), 'white']);
    states.push(cur_state.slice());
    cur_state.push([new Edge(hull[1], hull[2]), 'white']);
    states.push(cur_state.slice());
    let i = 1;
    while(i < vertices.length) {
        cur_state.push([new Edge(hull[hull.length - 1], vertices[i]), 'blue']);
        states.push(cur_state.slice());
        cur_state.pop();
        if(!ccw(hull[hull.length - 2], hull[hull.length - 1], vertices[i])) {
            hull.push(vertices[i]);
            ++i;
            cur_state.push([new Edge(hull[hull.length - 2], hull[hull.length - 1]), 'white']);
            states.push(cur_state.slice());
        }
        else {
            cur_state.pop();
            cur_state.push([new Edge(hull[hull.length - 2], hull[hull.length - 1]), 'red']);
            states.push(cur_state.slice());
            cur_state.pop();
            hull.pop();
            states.push(cur_state.slice());
        }
    }
    return states;
}