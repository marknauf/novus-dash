import React from 'react';
import { Table } from 'reactstrap';


const industries = 
[
  
  {
    "name": "Home Furnishing Merchant Wholesalers",
    "industry_type": "traded",
    "gscore": 6,
    "naics": "423220"
  },
  {
    "name": "Other Miscellaneous Durable Goods Merchant Wholesalers",
    "gscore_created_at": "2019-07-20T00:00:00",
    "industry_type": "local",
    "id": "5d35ec41ad4ffdb24f439007",
    "gscore": 6,
    "naics": "423990",
    "gscore_timeline": 2019
  },
  {
    "name": "Furniture Stores",
    "gscore_created_at": "2019-07-20T00:00:00",
    "industry_type": "local",
    "id": "5d35ec44ad4ffdb24f483e95",
    "gscore": 6,
    "naics": "442110",
    "gscore_timeline": 2019
  },
  {
    "name": "Other Building Material Dealers",
    "gscore_created_at": "2019-07-20T00:00:00",
    "industry_type": "local",
    "source": "dbusa",
    "id": "5d35ec46ad4ffdb24f4c6632",
    "gscore": 6,
    "naics": "444190",
    "gscore_timeline": 2019
  },
  {
    "revenue_est": 0,
    "revenue": 3380360000,
    "employees_est": 0,
    "name": "Electronic Shopping and Mail-Order Houses",
    "industry_type": "traded",
    "employees": 5637,
    "gscore": 6,
    "naics": "454110",
    "primary": true,
    "gscore_timeline": 2017,
    "conversion": [
      {
        "naics2012": [
          "454111",
          "454112",
          "454113"
        ],
        "naics2017": [
          "454110"
        ],
        "status": "combined"
      },
      {
        "naics2012": [
          "454111",
          "454112",
          "454113"
        ],
        "naics2017": [
          "454110"
        ],
        "status": "combined"
      }
    ]
  },
  {
    "name": "Electronic Shopping",
    "industry_type": "traded",
    "gscore": 6,
    "naics": "454111"
  },
  {
    "name": "Other Direct Selling Establishments",
    "industry_type": "local",
    "gscore": 6,
    "naics": "454390"
  },
  {
    "name": "Offices of Other Holding Companies",
    "industry_type": "traded",
    "gscore": 6,
    "naics": "551112"
  }
  
]
      
export default class IndustryTable extends React.Component {

   
    createTable = () => {
        let table = []
    
        table.push(<th>Industry</th>)
        table.push(<th>Gscore</th>)
        table.push(<th>Current ASU Students Related To Industry (Not implemented yet)</th>)

        for (let i = 0; i < 20; i++) {
          const rand = Math.round(Math.random() * 10000);
          let children = []
         
            if(industries[i]){
            children.push(<td>{industries[i].name}</td>)
            children.push(<td>{industries[i].gscore}</td>)
            children.push(<td>{rand}</td>)
          }
            

          table.push(<tr>{children}</tr>)
        }
        return table
      }


  render() {
    return (
      <Table className="mb-0">
          {this.createTable()}
      </Table>
    );
  }
}
