import {Vertex} from "./vertex.js";
import {Edge} from "./edge.js";

class Graph {
    constructor() {
        this.vertices = {};
        this.edges = [];
    }

    add_vertex(new_vertex) {
        for(let old_vertex of this.vertices) {
            let dist = 
            this.edges.push(new Edge(old_vertex, new_vertex))
        }
        this.vertices.push(new_vertex);
    }
}