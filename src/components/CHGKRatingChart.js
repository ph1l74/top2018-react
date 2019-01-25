import React, { Component } from 'react';
import LoadingDiv from './LoadingDiv';
import './CHGKRatingChart.css';

var LineChart = require("react-chartjs").Line;

class CHGKRatingChart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            error: null,
            isLoaded: false,
            rating: [],
            compareDate: new Date("2018-08-26"),
            chartData:
            {
                labels: [],
                datasets: [
                    {
                        label: "My First dataset",
                        fillColor: "rgba(32, 156, 238, 0.3)",
                        strokeColor: "rgba(32, 156, 238, 1)",
                        pointColor: "rgba(32, 156, 238, 1)",
                        pointStrokeColor: "#fff",
                        pointHighlightFill: "#fff",
                        pointHighlightStroke: "rgba(220,220,220,1)",
                        data: []
                    }
                ]
            },
            chartOptions: {

                ///Boolean - Whether grid lines are shown across the chart
                scaleShowGridLines: false,

                //String - Colour of the grid lines
                scaleGridLineColor: "rgba(0,0,0,.05)",

                //Number - Width of the grid lines
                scaleGridLineWidth: 1,

                //Boolean - Whether to show horizontal lines (except X axis)
                scaleShowHorizontalLines: false,

                //Boolean - Whether to show vertical lines (except Y axis)
                scaleShowVerticalLines: false,

                //Boolean - Whether the line is curved between points
                bezierCurve: true,

                //Number - Tension of the bezier curve between points
                bezierCurveTension: 0.3,

                //Boolean - Whether to show a dot for each point
                pointDot: true,

                //Number - Radius of each point dot in pixels
                pointDotRadius: 4,

                //Number - Pixel width of point dot stroke
                pointDotStrokeWidth: 1,

                //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
                pointHitDetectionRadius: 20,

                //Boolean - Whether to show a stroke for datasets
                datasetStroke: true,

                //Number - Pixel width of dataset stroke
                datasetStrokeWidth: 4,

                //Boolean - Whether to fill the dataset with a colour
                datasetFill: true,
                // {% raw %}
                //String - A legend template
                legendTemplate: "<div>хуй</div>", 
                // "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"><%if(datasets[i].label){%><%=datasets[i].label%><%}%></span></li><%}%></ul>",
                // {% endraw %}

                //Boolean - Whether to horizontally center the label and point dot inside the grid
                offsetGridLines: true
            }

        };
    }


    componentDidMount() {
        fetch("http://127.0.0.1:5000/rating")
            .then(res => res.json())
            .then(
                (result) => 
                {
                    let games = []
                    let rating = []
                    result.map(game => {
                        let date = new Date(game.date)
                        if (date >= this.state.compareDate) {
                            games.push(game.date)
                            rating.push(game.rating)
                        }
                    })

                    const newChartData = {...this.state.chartData};
                    newChartData.labels = games;
                    newChartData.datasets[0].data = rating;

                    this.setState({
                        isLoaded: true,
                        chartData: newChartData
                    })
                },
                (error) => {
                    console.log(error.message);
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, rating, chartData, chartOptions } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <LoadingDiv />;
        } else {
            return (
                <div className="chgk-rating">
                    <LineChart data={chartData} options={chartOptions} width="500" height="350" />
                </div>
            )
        }
    }
}

export default CHGKRatingChart;