const RADIUS = 5;

export class Graphics {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");;
        this.ctx.fillStyle = "white";
        this.ctx.strokeStyle = "white";
        this.ctx.lineWidth = 1;
    }

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    draw_vertices(vertices) {
        for(const vertex of vertices)
            this.draw_vertex(vertex);
    }

    draw_vertex(vertex) {
        this.draw_circle(vertex.x, vertex.y);
    }

    draw_edges(edges, color) {
        console.log(edges);
        for(const edge of edges)
            this.draw_edge(edge, color);
    }

    draw_edge(edge, color) {
        this.draw_line(edge.v1.x, edge.v1.y, edge.v2.x, edge.v2.y, color);
    }

    draw_circle(x, y) {
        this.ctx.beginPath();
        this.ctx.arc(x, y, RADIUS, 0, 2 * Math.PI);
        this.ctx.fill();
    }

    draw_line(x1, y1, x2, y2, color) {
        this.ctx.strokeStyle = color;
        this.ctx.beginPath();
        this.ctx.moveTo(x1, y1);
        this.ctx.lineTo(x2, y2);
        this.ctx.stroke();
    }

    draw_process(graph, considered) {
        let i = 0;
        let drawn_edges = [];
        function step() {
            if(i >= considered.length)
                return;
            const [edge, in_mst] = considered[i];
            this.clear();
            this.draw_vertices(graph.vertices);
            this.draw_edges(drawn_edges);
            if(in_mst)
            
            ++i;
        }
        step();
    }
}