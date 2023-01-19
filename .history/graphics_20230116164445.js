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
            this.draw_circle(vertex.x, vertex.y);
    }

    draw_vertex(vertex) {
        
    }

    draw_edges() {

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
}