import React, { Component } from 'react'
import { Chart } from 'chart.js';

export default class Dchart extends Component {
    chartRef = React.createRef();
    
    componentDidMount(){
      

        const ctx = this.chartRef.current.getContext("2d");
		ctx.canvas.width = 260;
        ctx.canvas.height = 220;        
        new Chart(ctx, {
            type: "doughnut",
            data: {
                labels: [
                    'test',
                    'test',
                    'test'
                  ],
                  datasets: [{
	
                    label: 'My First Dataset',
                    data: [300, 50, 100],
                    
                    backgroundColor: [
                      'rgb(255, 99, 132)',
                      'rgb(54, 162, 235)',
                      'rgb(255, 205, 86)'
                    ],
                    hoverOffset: 4
                  }]
            },
        
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
