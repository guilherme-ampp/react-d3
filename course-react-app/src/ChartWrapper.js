/* eslint-disable react-hooks/rules-of-hooks */
import React, {Component} from 'react';
import D3Chart from './D3Chart'

export default class ChartWrapper extends Component {
    constructor(props) {
        super(props);
        this.chartRef = React.createRef();
    }

    componentDidMount() {
        new D3Chart(this.chartRef);
    };

    render() {
        return <div ref={this.chartRef}></div>
    }
};