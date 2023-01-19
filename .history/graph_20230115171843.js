import {Vertex} from "./vertex.js";
import {Edge} from "./edge.js";

class Graph {
    constructor() {
        this.vertices = new Set();
        this.edges = new Set();
    }

    add_vertex(new_vertex) {
        for(let old_vertex of this.vertices) {
            let dist = Math.sqrt(Math.pow(old_vertex.x - new_vertex.x, 2) 
                                + Math.pow(old_vertex.y - new_vertex.y, 2));
            this.edges.push(new Edge(old_vertex, new_vertex, dist))
        }
        this.vertices.push(new_vertex);
    }
}