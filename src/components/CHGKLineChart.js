import React, { Component } from 'react';
import { Chart } from 'primereact/chart';


export class CHGKLineChart extends Component {

    render() {
        const data = {
            labels: this.props.data.xdata,
            datasets: [
                {
                    label: 'First Dataset',
                    data: this.props.data.ydata,
                    fill: true,
                    backgroundColor: '#2498f0',
                    borderColor: '#42A5F5'
                    // #42A5F5
                },
            ]
        };

        const options = {
            responsive: true,
            title: {
                display: false,
            },
            legend: {
                display: false
            },
            tooltips: {
                mode: 'label'
            },
            hover: {
                mode: 'nearest',
                intersect: true
            },
            scales: {
                xAxes: [{
                    display: true,
                    gridLines: {
                        display: false
                    },
                    scaleLabel: {
                        display: true,
                        labelString: [this.props.data.xlabel]
                    }
                }],
                yAxes: [{
                    display: true,
                    gridLines: {
                        display: false
                    },
                    scaleLabel: {
                        display: true,
                        labelString: [this.props.data.ylabel]
                    }
                }]
            }
        };

        return (
            <div>
                <Chart type="line" data={data} options={options} />
            </div >
        )
    }

}

export default CHGKLineChart;