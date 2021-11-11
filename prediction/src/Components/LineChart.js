import React, { Component } from 'react'
import Chart from 'chart.js/auto';

export default class LineChart extends Component {

    chartRef = React.createRef();
    
    componentDidMount(){

        const ctx = this.chartRef.current.getContext("2d");
		
		var xValues = ['TP','FDS','Maths','Inter','IDS','others'];
		var yValues = [7,8,8,9,9,15];

			new Chart(ctx, {
			type: "line",
			data: {
				labels: xValues,
				datasets: [{
				fill: false,
				lineTension: 0,
				backgroundColor: "rgba(0,0,255)",
				pointBackgroundColor: "rgb(0,0,0)",
				borderColor: "rgba(255,0,0,0.1)",
				data: yValues
				}]
			},
			options: {
				maintainAspectRatio: false,
                resposive:true,
				legend: {display: false},
				scales: {
				yAxes: [{ticks: {min: 6, max:16}}],
				}
			}
			});
    }
    render() {
        return (
            <div>
                <canvas 
				style={{height: "290px"}}
				id="myChart"
				ref={this.chartRef}
				/>
            </div>
        )
    }
}
