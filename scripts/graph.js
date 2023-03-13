import {Vertex} from "./vertex.js";
import {Edge} from "./edge.js";
import {euclid_dist} from "./script.js";
import {Graphics, RADIUS} from "./graphics.js";
import {kruskals} from "./kruskals.js";
import {prims} from "./prims.js";
import {convex_hull} from "./convex_hull.js";

const DELAY = 500;

export class Graph {
    constructor(canvas) {
        this.vertices = [];
        this.edges = [];
        this.adj_list = [];
        this.graphics = new Graphics(canvas);
    }

    click(x, y) {
        if(this.graphics.edges_drawn) {
            clearTimeout(this.graphics.timeout_id);
            this.graphics.clear();
            this.graphics.draw_vertices(this.vertices);
        }
        for(const vertex of this.vertices) {
            if(euclid_dist(x, y, vertex.x, vertex.y) <= RADIUS) {
                this.remove_vertex(vertex);
                this.graphics.clear();
                this.graphics.draw_vertices(this.vertices);
                return;
            }
        }
        this.add_vertex(x, y);
        this.graphics.draw_circle(x, y);
    }

    add_vertex(x, y) {
        const new_vertex = new Vertex(this.vertices.length, x, y);
        this.adj_list.push([]);
        for(let old_vertex of this.vertices) {
            const dist = euclid_dist(x, y, old_vertex.x, old_vertex.y);
            const new_edge = new Edge(old_vertex, new_vertex, dist);
            const reversed_edge = new Edge(new_vertex, old_vertex, dist);
            this.edges.push(new_edge);
            this.adj_list[old_vertex.n].push(new_edge);
            this.adj_list[new_vertex.n].push(reversed_edge);
        }
        this.vertices.push(new_vertex);
        this.graphics.draw_vertex(new_vertex);
    }

    remove_vertex(rm_vertex) {
        const ind = this.vertices.indexOf(rm_vertex);
        for(let v = rm_vertex.n + 1; v < this.vertices.length; ++v) {
            --this.vertices[v].n;
        }
        this.vertices.splice(ind, 1);
        this.adj_list[rm_vertex.n] = [];
        // for(let lst of this.adj_list) {
        //     for(let i = 0; i < lst.length; ++i) {
        //         if(lst[i].v2 === rm_vertex) {
        //             lst.splice(i, 1);
        //         }
        //     }
        // }
        for(let i = this.edges.length - 1; i >= 0; --i) {
            if(this.edges[i].v1 === rm_vertex || this.edges[i].v2 === rm_vertex)
                this.edges.splice(i, 1);
        }
        this.graphics.clear();
        this.graphics.draw_vertices(this.vertices);
    }

    do_kruskals() {
        let [mst, considered] = kruskals(this.edges.slice());
        this.graphics.draw_process(this, considered, DELAY);
    }

    do_prims() {
        let [mst, considered] = prims(this.adj_list);
        this.graphics.draw_process(this, considered, DELAY);
    }

    do_convex_hull() {
        let states = convex_hull(this.vertices.slice());
        this.graphics.draw_states(this, states, DELAY);
    }
}