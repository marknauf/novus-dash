import React from 'react';
import {Line} from 'react-chartjs-2';

const data = {
  labels: ['2014', '2015', '2016', '2017', '2018'],
  datasets: [
    {
      label: 'Other Current Liabilities in Millions',
      fill: false,
      lineTension: 0.1,
      backgroundColor: '#6610f2',
      borderColor: '#6610f2',
      borderCapStyle: 'round',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#6610f2',
      pointBackgroundColor: '#ffffff',
      pointBorderWidth: 2,
      pointHoverRadius: 10,
      pointHoverBackgroundColor: '#6610f2',
      pointHoverBorderColor: '#6610f2',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [17.39, 27.72, 56.73, 68.95, 100.30]
    }
  ]
};


class OtherLiabilities extends React.Component {

    render() {
        return (
            <div>
              <Line data={data} />
            </div>
        )
    }
}

export default OtherLiabilities;