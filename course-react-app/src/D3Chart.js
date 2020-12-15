import * as d3 from 'd3';

const data = [20, 15, 26, 35, 10];

export default class D3Chart {

    constructor(element) {
        const svg = d3.select(element)
                        .append("svg")
                            .attr("width", 500)
                            .attr("height", 500);
        
        const rects = svg.selectAll("rect")
            .data(data);

        rects.enter()
            .append("rect")
                .attr("x", (d, i) => i * 100)
                .attr("y", 50)
                .attr("height", d => d)
                .attr("width", 50)
                .attr("fill", d => d > 15 ? "gray" : "red");
    }

    update() {
        console.log('Updating from D3Chart!');
    }

}