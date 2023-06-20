import {Graph} from './graph.js'

export function euclid_dist(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
}

function canvas_click(event, canvas, graph) {
    const rect = canvas.getBoundingClientRect()
    const x = (event.clientX - rect.left) / (rect.right - rect.left) * canvas.width
    const y = (event.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height
    graph.click(x, y)
}

function main() {
    const canvas = document.querySelector('canvas')
    const graph = new Graph(canvas)

    canvas.addEventListener('click', (event) => canvas_click(event, canvas, graph))

    const kruskals_btn = document.getElementById('kruskals_btn')
    kruskals_btn.addEventListener('click', () => graph.do_kruskals())

    const prims_btn = document.getElementById('prims_btn')
    prims_btn.addEventListener('click', () => graph.do_prims())

    const ch_btn = document.getElementById('ch_btn')
    ch_btn.addEventListener('click', () => graph.do_convex_hull())

    const tsp_btn = document.getElementById("tsp_btn");
    tsp_btn.addEventListener("click", () => graph.do_tsp());

    const clear_btn = document.getElementById('clear_btn')
    clear_btn.addEventListener('click', () => graph.clear())

    const draw_nums_chk = document.getElementById('draw_nums_chk')
    draw_nums_chk.addEventListener('click', () => graph.toggle_draw_nums())
}

main()