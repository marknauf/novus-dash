import React from 'react';
import {Line} from 'react-chartjs-2';

const data = {
  labels: ['2014', '2015', '2016', '2017', '2018'],
  datasets: [
    {
      label: 'Common Equity in Millions',
      fill: false,
      lineTension: 0.1,
      backgroundColor: '#ed0f51',
      borderColor: '#ed0f51',
      borderCapStyle: 'round',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#ed0f51',
      pointBackgroundColor: '#ffffff',
      pointBorderWidth: 2,
      pointHoverRadius: 10,
      pointHoverBackgroundColor: '#ed0f51',
      pointHoverBorderColor: '#ed0f51',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [305.54, 242.55, 79.38, -48.33, -330.72]
    }
  ]
};


class CommonEquity extends React.Component {

    render() {
        return (
            <div>
              <Line data={data} />
            </div>
        )
    }
}

export default CommonEquity;