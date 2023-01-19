import {Vertex} from "./vertex.js";
import {Edge} from "./edge.js";

export class Graph {
    constructor() {
        this.vertices = [];
        this.edges = [];
        this.adj_list = [];
    }

    add_vertex(x, y) {
        const new_vertex = new Vertex(this.vertices.length, x, y);
        this.adj_list.push([]);
        for(let old_vertex of this.vertices) {
            const dist = Math.sqrt(Math.pow(old_vertex.x - x, 2) 
                                + Math.pow(old_vertex.y - y, 2));
            const new_edge = new Edge(old_vertex, new_vertex, dist);
            const reversed_edge = new Edge(new_vertex, old_vertex, dist);
            this.edges.push(new_edge);
            this.adj_list[old_vertex.n].push(new_edge);
            this.adj_list[new_vertex.n].push(reversed_edge);
        }
        this.vertices.push(new_vertex);
    }
}