import React from 'react';
import {Line} from 'react-chartjs-2';

const data = {
  labels: ['2014', '2015', '2016', '2017', '2018'],
  datasets: [
    {
      label: 'Total Liabilities in Millions',
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
      data: [249.98, 452.04, 682.30, 1260, 2220]
    }
  ]
};


class TotalLiabilities extends React.Component {

    render() {
        return (
            <div>
              <Line data={data} />
            </div>
        )
    }
}

export default TotalLiabilities;