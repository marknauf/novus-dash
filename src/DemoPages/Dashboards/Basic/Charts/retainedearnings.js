import React from 'react';
import {Line} from 'react-chartjs-2';

const data = {
  labels: ['2014', '2015', '2016', '2017', '2018'],
  datasets: [
    {
      label: 'Retained Earnings in Millions',
      fill: false,
      lineTension: 0.1,
      backgroundColor: '#2FA4E7',
      borderColor: '#2FA4E7',
      borderCapStyle: 'round',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#2FA4E7',
      pointBackgroundColor: '#ffffff',
      pointBorderWidth: 2,
      pointHoverRadius: 10,
      pointHoverBackgroundColor: '#2FA4E7',
      pointHoverBorderColor: '#2FA4E7',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [-58.12, -135.57, -329.94, -583.27, -1080]
    }
  ]
};


class RetainedEarnings extends React.Component {

    render() {
        return (
            <div>
              <Line data={data} />
            </div>
        )
    }
}

export default RetainedEarnings;