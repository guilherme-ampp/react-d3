import * as d3 from 'd3';

const dataURL = "https://udemy-react-d3.firebaseio.com/ages.json";

export default class D3Chart {

    constructor(element) {
        const svg = d3.select(element)
                        .append("svg")
                            .attr("width", 500)
                            .attr("height", 500);
        
        d3.json(dataURL).then((agesData) => {
            const rects = svg.selectAll("rect")
            .data(agesData);

            rects.enter()
                .append("rect")
                    .attr("x", (d, i) => i * 100)
                    .attr("y", 50)
                    .attr("height", d => parseInt(d.age) * 10)
                    .attr("width", 50)
                    .attr("fill", d => parseInt(d.age) > 10 ? "red" : "green");
        });
    }

    update() {
        console.log('Updating from D3Chart!');
    }

}