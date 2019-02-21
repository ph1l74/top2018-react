import React, { Component } from 'react';
import LoadingDiv from './LoadingDiv';
import CHGKLineChart from './CHGKLineChart';
import './CHGKRatingChart.css';

class CHGKRatingChart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      rating: [],
      compareDate: new Date("2018-08-26"),
      chartData: {
        xdata: [],
        ydata: []
      }
    }
  }

  componentDidMount() {
    fetch("https://mantissa-rating.herokuapp.com//rating")
      .then(res => res.json())
      .then(
        (result) => {
          let newChartData = {
            xdata: [],
            ydata: []
          }
          result.map(game => {
            let date = new Date(game.date);
            if (date >= this.state.compareDate) {
              let newDate = new Date(game.date)
              newDate = (newDate.getDate().toString() + '.' + newDate.getMonth().toString() + '.' + newDate.getFullYear().toString())
              newChartData.xdata.push(newDate);
              newChartData.ydata.push(game.rating);
            }
          })

          this.setState({
            isLoaded: true,
            chartData: newChartData
          })
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )

  }

  render() {
    const { error, isLoaded, chartData } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <LoadingDiv />;
    } else {
      return (
        <div className="chgk-rating">
          <CHGKLineChart data={chartData} />
        </div>
      )
    }
  }
}

  export default CHGKRatingChart;