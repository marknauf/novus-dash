import React from 'react';
import {Line} from 'react-chartjs-2';

const data = {
  labels: ['2014', '2015', '2016', '2017', '2018'],
  datasets: [
    {
      label: 'Total Assets in Millions',
      fill: false,
      lineTension: 0.1,
      backgroundColor: '#73A839',
      borderColor: '#73A839',
      borderCapStyle: 'round',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#73A839',
      pointBackgroundColor: '#ffffff',
      pointBorderWidth: 2,
      pointHoverRadius: 10,
      pointHoverBackgroundColor: '#73A839',
      pointHoverBorderColor: '#73A839',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [555.52, 694.58, 761.68, 1210, 1890]
    }
  ]
};


class TotalAssetsGraph extends React.Component {

    render() {
        return (
            <div>
              <Line data={data} />
            </div>
        )
    }
}

export default TotalAssetsGraph;