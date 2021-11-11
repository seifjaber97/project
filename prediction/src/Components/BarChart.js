import React, { Component } from 'react'
import { Chart } from 'chart.js';

export default class BarChart extends Component {
    chartRef = React.createRef();
    
    componentDidMount(){
      
        const ctx = this.chartRef.current.getContext("2d");
		ctx.canvas.width = 230;
        ctx.canvas.height = 140;  
              
        new Chart(ctx, {
			type: 'bar',
			data: {
				labels: ["S", "M", "T", "W", "T", "F", "S", "S", "M", "T"],
				datasets : [{
					label: "test",
					backgroundColor: '#ff9e27',
					borderColor: 'rgb(23, 125, 255)',
					data: [20, 4, 9, 5, 4, 6, 4, 3, 8, 10],
				}],
			},
			options: {
				responsive: true,
				legend: {
					display: false,
				},
				scales: {
					yAxes: [{
						ticks: {
							display: true //this will remove only the label
						},
						gridLines : {
							drawBorder: false,
							display : true
						}
					}],
					xAxes : [ {
						gridLines : {
							drawBorder: false,
							display : false
						}
					}]
				},
			}
		});
    }
    render() {
        return (
            <div >
                <canvas 

				id="myChart"
				ref={this.chartRef}
				/>
            </div>
        )
    }
}
