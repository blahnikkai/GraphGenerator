import {Vertex} from './vertex.js'
import {Edge} from './edge.js'
import {euclid_dist} from './script.js'
import {Graphics, RADIUS} from './graphics.js'
import {kruskals} from './kruskals.js'
import {prims} from './prims.js'
import {convex_hull} from './convex_hull.js'
import {tsp} from './tsp.js'

const DELAY = 500

export class Graph {
    constructor(canvas) {
        this.vertices = []
        this.edges = []
        this.adj_list = []
        this.graphics = new Graphics(canvas)
    }

    clear() {
        this.vertices = []
        this.graphics.clear()
    }

    click(x, y) {
        this.graphics.clear()
        this.graphics.draw_vertices(this.vertices)
        for(let i = 0; i < this.vertices.length; ++i) {
            if(euclid_dist(x, y, this.vertices[i].x, this.vertices[i].y) <= RADIUS) {
                this.remove_vertex(i)
                return
            }
        }
        this.add_vertex(x, y)
    }

    add_vertex(x, y) {
        const new_vertex = new Vertex(this.vertices.length, x, y)
        this.vertices.push(new_vertex)
        this.graphics.draw_vertex(new_vertex)
    }

    remove_vertex(rm_ind) {
        for(let i = this.vertices[rm_ind].n + 1; i < this.vertices.length; ++i)
                    --this.vertices[i].n
        this.vertices.splice(rm_ind, 1)
        this.graphics.clear()
        this.graphics.draw_vertices(this.vertices)
    }

    make_edges() {
        this.edges = []
        this.adj_list = []
        for(let i = 0; i < this.vertices.length; ++i)
            this.adj_list.push([])
        for(let i = 0; i < this.vertices.length; ++i) {
            for(let j = i + 1; j < this.vertices.length; ++j) {
                const dist = euclid_dist(this.vertices[i].x, this.vertices[i].y, this.vertices[j].x, this.vertices[j].y)
                const new_edge = new Edge(this.vertices[i], this.vertices[j], dist)
                const reverse_edge = new Edge(this.vertices[j], this.vertices[i], dist)
                this.edges.push(new_edge)
                this.adj_list[this.vertices[i].n].push(new_edge)
                this.adj_list[this.vertices[j].n].push(reverse_edge)
            }
        }
    }

    toggle_draw_nums() {
        this.graphics.draw_nums = !this.graphics.draw_nums
        this.graphics.clear()
        this.graphics.draw_vertices(this.vertices)
    }

    do_kruskals() {
        this.make_edges()
        let [mst, considered] = kruskals(this.edges.slice())
        this.graphics.draw_process(this, considered, DELAY)
    }

    do_prims() {
        if(this.vertices.length >= 2) {
            this.make_edges()
            const [mst, considered] = prims(this.adj_list)
            this.graphics.draw_process(this, considered, DELAY)
        }
    }

    do_convex_hull() {
        if(this.vertices.length >= 2) {
            const states = convex_hull(this.vertices.slice())
            this.graphics.draw_states(this, states, DELAY)
        }
    }

    do_tsp() {
        const edges = tsp(this.vertices.slice())
        this.graphics.draw_states(this, [edges], DELAY);
    }
}