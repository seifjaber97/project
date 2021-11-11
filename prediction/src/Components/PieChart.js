import React, { Component } from 'react'
import { Chart } from 'chart.js';

export default class PieChart extends Component {
    chartRef = React.createRef();
    
    componentDidMount(){
      

        const ctx = this.chartRef.current.getContext("2d");
		ctx.canvas.width = 10;
        ctx.canvas.height = 10;        
        new Chart(ctx, {
            type: "pie",
            data: {
                labels: ["Italy", "France", "Spain", "USA", "Argentina"],
                datasets: [{
                backgroundColor:  [
                    "#b91d47",
                    "#00aba9",
                    "#2b5797",
                    "#e8c3b9",
                    "#1e7145"
                  ],
                data: [55, 49, 44, 24, 15]
                }]
            },
            options: {
                maintainAspectRatio: false,
                resposive:true,
                title: {
                display: true,
                text: "World Wide Wine Production 2018"
                }
            }
            });
    }
    render() {
        return (
            <div style={{height: "290px"}}>
                <canvas 
				id="myChart"
				ref={this.chartRef}
				/>
            </div>
        )
    }
}
