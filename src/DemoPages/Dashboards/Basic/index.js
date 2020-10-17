import React, {Component, Fragment} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import classnames from 'classnames';
import LineExample from './Charts/line';
import PPEGraph from './Charts/ppe';
import LeaseGraph from './Charts/lease';
import CommonEquity from './Charts/commonequity';
import RetainedEarnings from './Charts/retainedearnings';
import ShareholderEquity from './Charts/totalshareholder';
import TotalEquity from './Charts/totalequity';
import OtherLiabilities from './Charts/otherliabilities';
import TotalLiabilities from './Charts/totalliabilities'
import CashGraph from './Charts/cash';
import DebtGraph from './Charts/debt';
import TotalAssetsGraph from './Charts/totalassets'
import ContactsTable from './Tables/contacts';
import IndustryTable from './Tables/industry';
import CompanyMap from './Maps/map'

import {
    Row, Col,
    Button,
    CardHeader,
    Card,
    CardBody,
    Progress,
    TabContent,
    TabPane, CardImg, CardText,
    CardTitle, CardSubtitle, CardLink, CardFooter
} from 'reactstrap';

import PageTitle from '../../../Layout/AppMain/PageTitle';

import {
    AreaChart, Area, Line,
    ResponsiveContainer,
    Bar,
    BarChart,
    ComposedChart,
    CartesianGrid,
    Tooltip,
    LineChart
} from 'recharts';

import {
    faAngleUp,
    faArrowRight,
    faArrowUp,
    faArrowLeft,
    faAngleDown
} from '@fortawesome/free-solid-svg-icons';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import avatar1 from '../../../assets/utils/images/avatars/1.jpg';
import avatar2 from '../../../assets/utils/images/avatars/2.jpg';
import avatar3 from '../../../assets/utils/images/avatars/3.jpg';
import avatar4 from '../../../assets/utils/images/avatars/4.jpg';


const company = [
    {
        "revenue_est": 0,
        "parent_obj": {},
        "has_projects": 1,
        "social": {
          "linkedin": {
            "url": "https://www.linkedin.com/company/wayfair/",
            "handle": "company/wayfair"
          },
          "source": "crunchbase",
          "twitter": {
            "url": "https://twitter.com/wayfair",
            "handle": "wayfair"
          },
          "crunchbase": {
            "url": "https://www.crunchbase.com/organization/wayfair",
            "handle": "organization/wayfair"
          },
          "facebook": {
            "url": "http://www.facebook.com/wayfair",
            "handle": "wayfair"
          }
        },
        "metrics": {
          "local_employees": 450,
          "source": "dbusa",
          "agg_global_revenue": 284745956,
          "global_employees_range": [
            5000,
            10000
          ],
          "local_employees_range": [
            100,
            500
          ],
          "agg_global_employees": 349,
          "global_employees": 9700,
          "local_revenue_range": [
            1000000000,
            null
          ],
          "local_revenue": 4720895000
        },
        "net_income": -194375000,
        "employees": 9700,
        "source": {
          "dbusa": {
            "match_info": {
              "Cust_Company_Name": "WAYFAIR",
              "Cust_State": "MA",
              "biz_matchkey": "80",
              "DBUSA_Full_Name": "Niraj Shah",
              "Cust_zip": "2116",
              "Dupe_Status": "Main_Record",
              "Cust_Address": "4 Copley Pl 7th Fl",
              "Dupe_ID": "4877709"
            },
            "Business_Status_Description": "Headquarters",
            "id_name": "bUSINESSID",
            "fields": [
              "phones",
              "industries",
              "metrics"
            ],
            "updated_at": "2019-01-28T00:00:00",
            "UltimateParentID": "11134000027813",
            "Business_Status_Code": 1,
            "name": "dbusa",
            "alt_match": {
              "matched": true,
              "params": {
                "match_cutoff": 0.9,
                "mra": true,
                "distance": 1
              }
            },
            "Num_Linked_Locations": 7,
            "id": "11134000027813"
          },
          "lexisnexis": {
            "type": "PUB",
            "name": "lexisnexis",
            "id": "2388175",
            "short_description": "Holding Company; Electronic Shopping",
            "fields": [
              "phones",
              "industries"
            ],
            "updated_at": "2018-12-07T00:00:00",
            "level": 0
          },
          "gazelle": {
            "name": "gazelle",
            "process": "manual",
            "fields": [
              "import",
              "n",
              "status",
              "keywords",
              "name",
              "recognition_tags",
              "description",
              "export",
              "website",
              "logo",
              "founded"
            ],
            "person": "Brittany Witham",
            "updated_at": "2019-07-22T00:00:00",
            "id": "585b626d15268141b808bf29"
          },
          "names": [
            "gazelle",
            "dbusa",
            "crunchbase",
            "lexisnexis"
          ],
          "crunchbase": {
            "profile_image_url": "http://public.crunchbase.com/t_api_images/v1398815631/lmpxyhphjtcka2rck8zi.png",
            "short_description": "Wayfair is an online retailer of home products for bedroom, living room, kitchen and dining, home entertainment, bathroom, and more.",
            "id_name": "uuid",
            "fields": [
              "acquisitions",
              "keywords",
              "phones",
              "funding",
              "social",
              "ipo",
              "emails"
            ],
            "permalink": "wayfair",
            "status": "ipo",
            "created_at": "2008-04-20T01:39:01",
            "name": "crunchbase",
            "alias": "[\"CSN STORES LLC\"]",
            "id": "9a9bc749-457b-270a-8bbb-d3d771254be3",
            "primary_role": "company",
            "updated_at": "2018-10-27T00:23:00"
          }
        },
        "root_parent": "NA",
        "gscore": 6,
        "employees_agg": 463,
        "created_at": "2019-07-03T23:48:12.473000",
        "revenue": 3380360000,
        "recognition_tags": [
          "inc5k14",
          "forbes_2000_2019",
          "fortune_500_2019"
        ],
        "employees_est": 0,
        "id": "5d1d3ebd02a24611b2007f87",
        "original_id": "5cc75bdf0f86c414275455d0",
        "short_description": "Holding Company; Electronic Shopping",
        "funding": {
          "last_funding_on": "2014-03-07T00:00:00",
          "funding_total_usd": 358000000,
          "funding_rounds": 3,
          "last_funding": {
            "announced_on": "2014-03-07T00:00:00",
            "raised_amount_usd": 157000000,
            "last": true,
            "funding_round_type": "series_b"
          },
          "rounds": [
            {
              "funding_round_type": "series_b",
              "raised_amount_usd": 157000000,
              "announced_on": "2014-03-07T00:00:00"
            },
            {
              "funding_round_type": "series_other",
              "raised_amount_usd": 36000000,
              "announced_on": "2012-12-10T00:00:00"
            },
            {
              "funding_round_type": "other",
              "raised_amount_usd": 165000000,
              "announced_on": "2011-06-21T00:00:00"
            }
          ]
        },
        "funded": true,
        "_score": 0,
        "gid": "585b626d15268141b808bf29",
        "updated_at": "2019-10-22T18:47:32.048985",
        "primary_naics": "454110",
        "sales": 3380360000,
        "location_revenue_range": [
          1000000000,
          null
        ],
        "dup_log": {
          "counts": {
            "emails": 1,
            "industries": 7,
            "keywords": 3,
            "recognition_tags": 1,
            "description": 485,
            "phones": 7,
            "tradeshows": 0
          },
          "group": "n.domain",
          "created_at": "2019-06-19T16:27:03.879872",
          "status": "best",
          "dups_by": "wayfair.com"
        },
        "industries": [
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
        ],
        "roles": [
          "hq"
        ],
        "n": {
          "url": "wayfair.com",
          "name": "WAYFAIR",
          "domain": "wayfair.com"
        },
        "location_employees": 450,
        "ipo": {
          "price_currency_code": "USD",
          "source": {
            "id_name": "uuid",
            "permalink": "wayfair-ipo--53404619",
            "ipo_id": "53404619-5787-d129-ebe6-2127e2573ca6",
            "created_at": "2014-10-31T06:46:33",
            "updated_at": "2018-02-13T00:34:37",
            "name": "crunchbase",
            "id": "53404619-5787-d129-ebe6-2127e2573ca6",
            "company_id": "9a9bc749-457b-270a-8bbb-d3d771254be3"
          },
          "stock_exchange_symbol": "NYSE",
          "stock_symbol": "W",
          "social": {
            "crunchbase": {
              "url": "https://www.crunchbase.com/ipo/wayfair-ipo--53404619"
            }
          },
          "price": 2400000000,
          "price_usd": 2400000000,
          "name": "Wayfair",
          "went_public_on": "2014-10-02T00:00:00",
          "id": "5da9d14cea3290321d1fb19d",
          "cb_url": "https://www.crunchbase.com/ipo/wayfair-ipo--53404619"
        },
        "address": {
          "country": {
            "code": "US",
            "name": "United States"
          },
          "source": "dbusa",
          "subregion": {
            "code": "021",
            "name": "Northern America"
          },
          "location": "4 Copley Pl Ste 700, Boston, Massachusetts, Suffolk, 2116, United States",
          "geo": {
            "lon": -71.1009934795961,
            "lat": 42.3167555194488
          },
          "admin0": {
            "division": "New England",
            "region": "Northeast"
          },
          "admin2": {
            "code": "25025",
            "name": "Suffolk",
            "admin_type": "county",
            "fips": "25025"
          },
          "city": "Boston",
          "street": "4 Copley Pl Ste 700",
          "lid": "US:MA:25025:Boston:2116",
          "region": {
            "code": "019",
            "name": "Americas"
          },
          "admin1": {
            "code": "MA",
            "name": "Massachusetts",
            "admin_type": "state",
            "fips": "25"
          },
          "postal_code": "2116",
          "geo_source": "dbusa"
        },
        "state_incorp": "DE",
        "net_worth": 79384000,
        "employees_range": [
          5000,
          10000
        ],
        "import": "N",
        "employees_agg_range": [
          100,
          500
        ],
        "location_revenue": 3380360000,
        "name": "Wayfair",
        "logo": "//logo.clearbit.com/wayfair.com",
        "revenue_range": [
          1000000000,
          null
        ],
        "founded": "2002",
        "emails": [
          {
            "source": "crunchbase",
            "email": "service@wayfair.com"
          }
        ],
        "revenue_type": "Revenue",
        "description": "Wayfair is the largest pure-play online retailer of home goods in the US. Key categories for the company include furniture, decor, kitchen & dining products, home improvement, patio & garden and baby.\n\nThe company, founded in 2002 as CSN Stores, is based in Boston, MA, and has additional offices in Utah, Kentucky, New York, Galway, Ireland, London, England and Berlin, Germany.\n\nWayfair employs over 2,300 people across those offices.\n\nIn 2014, Wayfair's sales exceeded $1.3 billion.",
        "location_employees_range": [
          100,
          500
        ],
        "phones": [
          {
            "phone": "(866) 263-8325"
          },
          {
            "phone": "+1 617-532-6100",
            "source": "lexisnexis"
          },
          {
            "phone": "+1 866-263-8325",
            "source": "crunchbase"
          },
          {
            "fax": "+1 617-532-6148",
            "tags": [
              "lexisnexis"
            ]
          },
          {
            "fax": "+1 617-532-6148",
            "tags": [
              "lexisnexis"
            ]
          },
          {
            "fax": "+1 617-532-6148",
            "tags": [
              "lexisnexis"
            ]
          },
          {
            "fax": "+1 617-532-6148",
            "tags": [
              "lexisnexis"
            ]
          },
          {
            "fax": "+1 617-532-6148",
            "tags": [
              "lexisnexis"
            ]
          },
          {
            "fax": "+1 617-532-6148",
            "tags": [
              "lexisnexis"
            ]
          },
          {
            "fax": "+1 617-532-6148",
            "tags": [
              "lexisnexis"
            ]
          },
          {
            "fax": "+1 617-532-6148",
            "tags": [
              "lexisnexis"
            ]
          },
          {
            "source": "lexisnexis",
            "fax": "+1 617-532-6148"
          },
          {
            "fax": "+1 617-532-6148",
            "tags": [
              "lexisnexis"
            ]
          },
          {
            "fax": "+1 617-532-6148",
            "tags": [
              "lexisnexis"
            ]
          },
          {
            "fax": "+1 617-532-6148",
            "tags": [
              "lexisnexis"
            ]
          },
          {
            "fax": "+1 617-532-6148",
            "tags": [
              "lexisnexis"
            ]
          },
          {
            "fax": "+1 617-532-6148",
            "tags": [
              "lexisnexis"
            ]
          },
          {
            "fax": "+1 617-532-6148",
            "tags": [
              "lexisnexis"
            ]
          },
          {
            "fax": "+1 617-532-6148",
            "tags": [
              "lexisnexis"
            ]
          },
          {
            "fax": "+1 617-532-6148",
            "tags": [
              "lexisnexis"
            ]
          },
          {
            "source": "lexisnexis",
            "fax": "+1 617-532-6148"
          },
          {
            "source": "lexisnexis",
            "fax": "+1 617-532-6148"
          },
          {
            "fax": "+1 617-532-6148",
            "tags": [
              "lexisnexis"
            ]
          },
          {
            "fax": "+1 617-532-6148",
            "tags": [
              "lexisnexis"
            ]
          },
          {
            "fax": "+1 617-532-6148",
            "tags": [
              "lexisnexis"
            ]
          },
          {
            "fax": "+1 617-532-6148",
            "tags": [
              "lexisnexis"
            ]
          },
          {
            "fax": "+1 617-532-6148",
            "tags": [
              "lexisnexis"
            ]
          },
          {
            "fax": "+1 617-532-6148",
            "tags": [
              "lexisnexis"
            ]
          },
          {
            "fax": "+1 617-532-6148",
            "tags": [
              "lexisnexis"
            ]
          },
          {
            "fax": "+1 617-532-6148",
            "tags": [
              "lexisnexis"
            ]
          }
        ],
        "status": "active",
        "root_parent_obj": {},
        "locations": {
          "countries": {
            "codes": [
              "IE",
              "AU",
              "US",
              "DE"
            ],
            "count": 4
          },
          "hq": [
            "US:MA:25025:Boston:2116"
          ],
          "locations": 21,
          "branch": [
            "AU:::Haymarket:",
            "DE:BE::Berlin:10997",
            "IE:::Galway:",
            "US:CT:09003:Windsor:6095",
            "US:IL:17043:Carol Stream:60188",
            "US:KY:21015:Hebron:41048",
            "US:KY:21117:Erlanger:41018",
            "US:MA:25017:Cambridge:78223",
            "US:MA:25025:Boston:02116",
            "US:MA:25025:Boston:2116",
            "US:MA::Boston:",
            "US:MA::Boston:02116",
            "US:NJ:34023:Cranbury:8512",
            "US:NY:36061:New York:10012",
            "US:TX:48113:Lancaster:75134",
            "US:UT:49057:Ogden:84404"
          ]
        },
        "acquisitions": 4,
        "keywords": [
          "Retail",
          "Home Decor",
          "E-Commerce",
          "Furniture",
          "Consumer Goods",
          "Commerce And Shopping",
          "Real Estate"
        ],
        "export": "N",
        "old_industries": [
          {
            "name": "Other Direct Selling Establishments",
            "gscore": 6,
            "naics": "454390"
          },
          {
            "name": "Home Furnishing Merchant Wholesalers",
            "gscore": 6,
            "naics": "423220"
          },
          {
            "name": "Other Miscellaneous Durable Goods Merchant Wholesalers",
            "gscore": 6,
            "naics": "423990"
          },
          {
            "name": "Offices of Other Holding Companies",
            "gscore": 6,
            "naics": "551112"
          },
          {
            "name": "Furniture Stores",
            "gscore": 6,
            "naics": "442110"
          },
          {
            "revenue_est": 0,
            "revenue": 3380360000,
            "employees_est": 0,
            "name": "Electronic Shopping",
            "employees": 5637,
            "gscore": 6,
            "naics": "454111",
            "gscore_timeline": 2017
          }
        ],
        "naics": [
          "454111",
          "442110",
          "551112",
          "423990",
          "423220",
          "454390"
        ],
        "rating": 78,
        "website": "http://www.wayfair.com",
        "parent": "NA",
        "_type": "company",
        "_index": "2019_10_22_pt169289032_68090.company",
        "_id": "585b626d15268141b808bf29"
      }
]


export default class AnalyticsDashboard1 extends Component {
    constructor() {
        super();

        this.state = {
            dropdownOpen: false,
            activeTab1: '11',

        };
        this.toggle = this.toggle.bind(this);
        this.toggle1 = this.toggle1.bind(this);

    }

    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    toggle1(tab) {
        if (this.state.activeTab1 !== tab) {
            this.setState({
                activeTab1: tab
            });
        }
    }

    render() {

        return (
            <Fragment>
                <ReactCSSTransitionGroup
                    component="div"
                    transitionName="TabsAnimation"
                    transitionAppear={true}
                    transitionAppearTimeout={0}
                    transitionEnter={false}
                    transitionLeave={false}>
                    <div>
                        <PageTitle
                            heading="3D Printing"
                            subheading="Packaging and Product Production: Circular practices for packaging manufacturing"
                            icon="pe-7s-home icon-gradient bg-mean-fruit"
                        />
                        <Row>
                            <Col md="12" lg = "12">
                            <Card className="main-card mb-3">
                                <CardBody>
                                    <CardTitle>Innovation Description</CardTitle>

                                        <p>3-D printing is a maanufacturing technique, which allows manufacturers to control the amount of material used for production of plastic packaging</p>
                                        

                                </CardBody>
                            </Card>
                            </Col>
                        </Row>

                        <Row>
                            <Col md="3">
                                <div className="card mb-3 widget-chart">
                                    <div className="widget-numbers">
                                    Met L Flow
                                    {/* 1000 */}
                                    </div>
                                    <div className="widget-subheading">
                                        Example
                                    </div>
                                </div>
                            </Col>
                            <Col md="3">
                                <div className="card mb-3 widget-chart">
                                    <div className="widget-numbers">
                                    Diffusion
                                    </div>
                                    <div className="widget-subheading">
                                        State
                                    </div>
                                </div>
                            </Col>
                            <Col md="3">
                                <div className="card mb-3 widget-chart">
                                    <div className="widget-numbers">
                                      Emerging
                                    </div>
                                    <div className="widget-subheading">
                                        State of Development
                                    </div>
                                </div>
                            </Col>
                            <Col md="3">
                                <div className="card mb-3 widget-chart">
                                    <div className="widget-numbers">
                                      High
                                    </div>
                                    <div className="widget-subheading">
                                        Effect on Circularity
                                    </div>
                                </div>
                            </Col>
                           

                            </Row>

                          


                        <Row>
                            <Col md="12" lg="12">
                                <Card className="mb-3">
                                    <CardHeader className="card-header-tab">
                                        <div className="card-header-title">
                                            <i className="header-icon pe-7s-graph3 icon-gradient bg-tempting-azure"> </i>
                                            Analytics 
                                        </div>
                                        <div className="btn-actions-pane-right">
                                        <Button outline
                                                    className={"border-0 btn-pill btn-wide btn-transition " + classnames({active: this.state.activeTab1 === '00'})}
                                                    color="primary" onClick={() => {
                                                this.toggle1('00');
                                            }}>Assets</Button>
                                            <Button outline
                                                    className={"border-0 btn-pill btn-wide btn-transition " + classnames({active: this.state.activeTab1 === '11'})}
                                                    color="primary" onClick={() => {
                                                this.toggle1('11');
                                            }}>Liabilities</Button>
                                            <Button outline
                                                    className={"ml-1 btn-pill btn-wide border-0 btn-transition " + classnames({active: this.state.activeTab1 === '22'})}
                                                    color="primary" onClick={() => {
                                                this.toggle1('22');
                                            }}>Equity</Button>
                                        </div>
                                    </CardHeader>
                                          
                                    <TabContent activeTab={this.state.activeTab1}>
                                    <TabPane tabId="00">
                                    <Row>
                        <Col lg="6">
                            <Card className="main-card mb-3">
                                <CardBody>
                                    <CardTitle>Total Current Assets</CardTitle>
                                    <LineExample/>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg="6">
                        <Card className="main-card mb-3">
                                <CardBody>
                                    <CardTitle>Gross Property, Plant & Equipment</CardTitle>
                                    <PPEGraph/>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg="6">
                        <Card className="main-card mb-3">
                                <CardBody>
                                    <CardTitle>Cash Only</CardTitle>
                                    <CashGraph/>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg="6">
                        <Card className="main-card mb-3">
                                <CardBody>
                                    <CardTitle>Total Assets</CardTitle>
                                    <TotalAssetsGraph/>
                                </CardBody>
                            </Card>
                        </Col>
                        </Row>
                                            </TabPane>

                                        <TabPane tabId="11">
                                        <Row>
                        <Col lg="6">
                            <Card className="main-card mb-3">
                                <CardBody>
                                    <CardTitle>Long-Term Debt</CardTitle>
                                    <DebtGraph/>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg="6">
                        <Card className="main-card mb-3">
                                <CardBody>
                                    <CardTitle>Capitalized Lease Obligations</CardTitle>
                                    <LeaseGraph/>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg="6">
                        <Card className="main-card mb-3">
                                <CardBody>
                                    <CardTitle>Other Current Liabilities</CardTitle>
                                    <OtherLiabilities/>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg="6">
                        <Card className="main-card mb-3">
                                <CardBody>
                                    <CardTitle>Total Liabilities</CardTitle>
                                    <TotalLiabilities/>
                                </CardBody>
                            </Card>
                        </Col>
                        </Row>
                                            
                                        </TabPane>
                                        <TabPane tabId="22">
                                        <Row>
                        <Col lg="6">
                            <Card className="main-card mb-3">
                                <CardBody>
                                    <CardTitle>Common Equity Total</CardTitle>
                                    <CommonEquity/>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg="6">
                        <Card className="main-card mb-3">
                                <CardBody>
                                    <CardTitle>Retained Earnings</CardTitle>
                                    <RetainedEarnings/>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg="6">
                        <Card className="main-card mb-3">
                                <CardBody>
                                    <CardTitle>Total Shareholder Equity</CardTitle>
                                    <ShareholderEquity/>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg="6">
                        <Card className="main-card mb-3">
                                <CardBody>
                                    <CardTitle>Total Equity</CardTitle>
                                    <TotalEquity/>
                                </CardBody>
                            </Card>
                        </Col>
                        </Row>
                                          
                                        </TabPane>
                                    </TabContent>
                                </Card>
                               </Col>
                            
                        </Row>
                    


                        {/* <Row>
                            <Col md="12" lg="12">
                                <Card className="mb-3">
                                    <CardHeader className="card-header-tab">
                                        <div className="card-header-title">
                                            <i className="header-icon pe-7s-cup icon-gradient bg-tempting-azure"> </i>
                                            Growing Industries 
                                        </div>
                                    </CardHeader>

                                    <CardBody>
                                    <Row>
                                        <Col lg="12">
                                           
                                                    <IndustryTable/>
                                  
                                        </Col>
                                    </Row>
                                    </CardBody>
                                          
                                    
                                </Card>
                               </Col>
                            
                        </Row> */}

                                          

                        <Row>
                    <Col md="12" lg="12">
                                <Card className="mb-3">
                                    <CardHeader className="card-header-tab">
                                        <div className="card-header-title">
                                            <i className="header-icon pe-7s-global icon-gradient bg-tempting-azure"> </i>
                                            Geospacial Analysis
                                        </div>
                                    </CardHeader>

                                    <CardBody>
                    <CompanyMap/>
                    </CardBody>
                    </Card>
                    </Col>
                    </Row>


                    <Row>
                    <Col md="12" lg="12">
                                <Card className="mb-3">
                                    <CardHeader className="card-header-tab">
                                        <div className="card-header-title">
                                            {/* <i className="header-icon pe-7s-global icon-gradient bg-tempting-azure"> </i> */}
                                            Impacts
                                        </div>
                                    </CardHeader>

                                    <CardBody>
                
                                    <Row>
                            <Col md="12">
                                <div className="card mb-3 widget-chart">
                                    <div className="widget-numbers">
                                    N/A
                                    {/* 1000 */}
                                    </div>
                                    <div className="widget-subheading">
                                    GHG Impact
                                    </div>
                                </div>
                            </Col>
                            </Row>

                            <Row>
                            <Col md="12">
                                <div className="card mb-3 widget-chart">
                                    <div className="widget-numbers">
                                    N/A
                                    {/* 1000 */}
                                    </div>
                                    <div className="widget-subheading">
                                    Environmental Impacts 
                                    </div>
                                </div>
                            </Col>
                            </Row>
                            
                            <Row>
                            <Col md="12">
                                <div className="card mb-3 widget-chart">
                                    <div className="widget-numbers">
                                    N/A
                                    {/* 1000 */}
                                    </div>
                                    <div className="widget-subheading">
                                    Environmental Impacts 
                                    </div>
                                </div>
                            </Col>
                            </Row>

                            <Row>
                            <Col md="12">
                                <div className="card mb-3 widget-chart">
                                    <div className="widget-numbers">
                                    N/A
                                    {/* 1000 */}
                                    </div>
                                    <div className="widget-subheading">
                                   Social Impacts 
                                    </div>
                                </div>
                            </Col>
                            </Row>
                            


                    

                    </CardBody>
                    </Card>
                    </Col>
                    </Row>




                    <Row>
                            <Col md="12">
                                <Card className="main-card mb-3">
                                    <div className="card-header">Relevant Researchers
                                        <div className="btn-actions-pane-right">
                                            <div role="group" className="btn-group-sm btn-group">
                                                {/* <button className="active btn btn-info">Last Week</button>
                                                <button className="btn btn-info">All Month</button> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="table-responsive">
                                        <table className="align-middle mb-0 table table-borderless table-striped table-hover">
                                            <thead>
                                            <tr>
                                                <th className="text-center">#</th>
                                                <th>Name</th>
                                                <th className="text-center">Field</th>
                                                <th className="text-center">Status</th>
                                                <th className="text-center">Actions</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td className="text-center text-muted">#1</td>
                                                <td>
                                                    <div className="widget-content p-0">
                                                        <div className="widget-content-wrapper">
                                                            {/* <div className="widget-content-left mr-3">
                                                                  <div className="widget-content-left">
                                                                    <img width={40} className="rounded-circle" src={"https://asu.pure.elsevier.com/ws/files/96520562/amorale9%3Fsize=medium"} alt="Avatar" />
                                                                </div>
                                                            </div> */}
                                                            <div className="widget-content-left flex2">
                                                                <div className="widget-heading">Andrea Morales</div>
                                                                <div className="widget-subheading opacity-7">Professor</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-center">Consumer Behavior</td>
                                                <td className="text-center">
                                                    <div className="text-center">WPC: Marketing</div>
                                                </td>
                                                <td className="text-center">
                                                    <button type="button" className="btn btn-primary btn-sm">Details</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center text-muted">#2</td>
                                                <td>
                                                    <div className="widget-content p-0">
                                                        <div className="widget-content-wrapper">
                                                            {/* <div className="widget-content-left mr-3">
                                                                <div className="widget-content-left">
                                                                    <img width={40} className="rounded-circle" src={"https://asu.pure.elsevier.com/ws/files/96519074/mohan%3Fsize=medium"} alt="Avatar" />
                                                                </div>
                                                            </div> */}
                                                            <div className="widget-content-left flex2">
                                                                <div className="widget-heading">Mohan Gopalakrishnan</div>
                                                                <div className="widget-subheading opacity-7">Chair & Assoc Professor</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-center">Global Supply Chain Risk Management</td>
                                                <td className="text-center">
                                                    <div className="text-center">WPC: Supply Chain Management</div>
                                                </td>
                                                <td className="text-center">
                                                    <button type="button" className="btn btn-primary btn-sm">Details</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center text-muted">#3</td>
                                                <td>
                                                    <div className="widget-content p-0">
                                                        <div className="widget-content-wrapper">
                                                            {/* <div className="widget-content-left mr-3">
                                                                <div className="widget-content-left">
                                                                    <img width={40} className="rounded-circle" src={"https://asu.pure.elsevier.com/ws/files/96519412/srimo%3Fsize=medium"} alt="Avatar" />
                                                                </div>
                                                            </div> */}
                                                            <div className="widget-content-left flex2">
                                                                <div className="widget-heading">Srimathy Mohan</div>
                                                                <div className="widget-subheading opacity-7">Associate Professor</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-center">Inventory Management</td>
                                                <td className="text-center">
                                                    <div className="text-center">WPC: Supply Chain Management</div>
                                                </td>
                                                <td className="text-center">
                                                    <button type="button" className="btn btn-primary btn-sm">Details</button>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    {/* <div className="d-block text-center card-footer">
                                        <button className="mr-2 btn-icon btn-icon-only btn btn-outline-danger"><i className="pe-7s-trash btn-icon-wrapper"> </i></button>
                                        <button className="btn-wide btn btn-success">Save</button>
                                    </div> */}
                                </Card>
                            </Col>
                        </Row>







                        <Row>
                            <Col md="12" lg="12">
                                <Card className="mb-3">
                                    <CardHeader className="card-header-tab">
                                        <div className="card-header-title">
                                            {/* <i className="header-icon pe-7s-call icon-gradient bg-tempting-azure"> </i> */}
                                           References
                                        </div>
                                    </CardHeader>

                                    <CardBody>
                                    <Row>
                                        <Col lg="12">
                                            {/* <Card className="main-card mb-3">
                                                <CardBody>
                                                    <CardTitle>Contacts</CardTitle> */}
                                                    <ContactsTable/>
                                                {/* </CardBody>
                                            </Card> */}
                                        </Col>
                                    </Row>
                                    </CardBody>
                                          
                                    
                                </Card>
                               </Col>
                            
                        </Row>


           







                        {/* <Row>
                            <Col md="12" lg="12">
                                <Card className="mb-3">
                                    <CardHeader className="card-header-tab">
                                        <div className="card-header-title">
                                            <i className="header-icon lnr-rocket icon-gradient bg-tempting-azure"> </i>
                                            Map 
                                        </div>
                                        <div className="btn-actions-pane-right">
                                        <Button outline
                                                    className={"border-0 btn-pill btn-wide btn-transition " + classnames({active: this.state.activeTab1 === '00'})}
                                                    color="primary" onClick={() => {
                                                this.toggle1('00');
                                            }}>Test</Button>
                                            <Button outline
                                                    className={"border-0 btn-pill btn-wide btn-transition " + classnames({active: this.state.activeTab1 === '11'})}
                                                    color="primary" onClick={() => {
                                                this.toggle1('11');
                                            }}>Data</Button>
                                            <Button outline
                                                    className={"ml-1 btn-pill btn-wide border-0 btn-transition " + classnames({active: this.state.activeTab1 === '22'})}
                                                    color="primary" onClick={() => {
                                                this.toggle1('22');
                                            }}>Contacts</Button>
                                        </div>
                                    </CardHeader>
                                          
                                    <TabContent activeTab={this.state.activeTab1}>
                                    <TabPane tabId="00">
                                    <Row>
                        <Col lg="6">
                            <Card className="main-card mb-3">
                                <CardBody>
                                    <CardTitle>Total Current Assets</CardTitle>
                                    <LineExample/>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg="6">
                        <Card className="main-card mb-3">
                                <CardBody>
                                    <CardTitle>Property, Plant & Equipment</CardTitle>
                                    <LineExample/>
                                </CardBody>
                            </Card>
                        </Col>
                        </Row>
                                            </TabPane>

                                        <TabPane tabId="11">
                                          <div>Another Test</div>
                                        </TabPane>
                                        <TabPane tabId="22">
                                            <div>Test</div>
                                          
                                        </TabPane>
                                    </TabContent>
                                </Card>
                               </Col>
                            
                        </Row> */}




                        </div>
                        
                </ReactCSSTransitionGroup>
            </Fragment>
        )
    }
}
