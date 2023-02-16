import React from "react";
import Header from "../../components/Header/Header";
import axios from 'axios';
import {BASE_URL} from "../../service/ApiConfig";
import {Button, Card, CardBody, Col, FormGroup, Input, Label, Row} from "reactstrap";
import './filterDetails.scss'
import {Checkbox, Dropdown} from "semantic-ui-react";
import StarPicker from "react-star-picker";
import Sidebar from "react-sidebar";
import * as Icon from 'react-feather'

import {history} from '../../history'
import {Link} from "react-router-dom";
import {PLACE_SERVICE_PATH} from "../../constants/constant";

class FilterDetails extends React.Component {

    state = {
        availableCount: 50,
        searchDate: '29/11/2023',
        sidebarOpen: false,
        screenSize: window.innerWidth
    }

    componentDidMount() {
        let data = {
            first_name: 'Harshadeva', email: 'dila@gmail.com', password: '11111111', password_confirmation: '11111111'
        };
        console.log(this.props)
    }

    onSetSidebarOpen(open) {
        this.setState({sidebarOpen: open});
    }

    render() {
        let {availableCount, searchDate, screenSize} = this.state
        let preferredTime = [
            {name: 'Flexible-anyTime', count: 25},
            {name: 'Morning before 12pm', count: 22},
            {name: 'Afternoon after', count: 30}
        ];
        let extraTasks = [
            {name: 'Ironing', count: 25},
            {name: 'Laundry', count: 22},
            {name: 'Inside window', count: 9},
            {name: 'Inside fridge', count: 6},
            {name: 'Inside oven', count: 3}
        ];
        let serviceType = [
            {name: 'Weekly', count: 50},
            {name: 'Every 2 weeks', count: 15},
            {name: 'Monthly', count: 20},
            {name: 'Daily', count: 30},
            {name: 'One-off', count: 20}
        ];
        const friendOptions = [
            {
                key: '1',
                text: 'Price A-Z',
                value: 'P A-Z',
            },
            {
                key: '2',
                text: 'Price Z-A',
                value: 'P Z-A',
            }, {
                key: '3',
                text: 'Rate Z-A',
                value: 'R A-Z',
            }, {
                key: '4',
                text: 'Rate Z-A',
                value: 'R A-Z',
            },
        ];

        const filterDate = [
            {
                itemId: 1,
                itemName: 'Christoper Birch',
                priceRange: '20$',
                companyName: 'Abc LTD',
                starCount: 4,
                companyDesc: 'Lorem ipsum dolor sit amet, Ab aperiam orem ipsum dolor sit amet, consectetur adipisicing elit. Ab aperiam aut consequatur deleniti dolor, doloremque dolorum ea eum hic impedit incidunt, labore maxime mollitia nobis officia rem soluta, temporibus unde.'
            }, {
                itemId: 2,
                itemName: 'Bradan Wills',
                priceRange: '20$',
                companyName: 'Acing Acting LTD',
                starCount: 5,
                companyDesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aperiam aut consequatur deleniti dolor, doloremque dolorum ea eum hic impedit incidunt, labore maxime mollitia nobis officia rem soluta, temporibus unde.'
            }, {
                itemId: 3,
                itemName: 'Christoper Birch',
                priceRange: '20$',
                companyName: 'Abc LTD',
                starCount: 4,
                companyDesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aperiam aut consequatur deleniti dolor, doloremque dolorum ea eum hic impedit incidunt, labore maxime mollitia nobis officia rem soluta, temporibus unde.'
            }, {
                itemId: 4,
                itemName: 'Christoper Birch',
                priceRange: '20$',
                companyName: 'Abc LTD',
                starCount: 6,
                companyDesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aperiam aut consequatur deleniti dolor, doloremque dolorum ea eum hic impedit incidunt, labore maxime mollitia nobis officia rem soluta, temporibus unde.'
            },
        ]

        return <div className='filterView'>
            <Header/>
            <div className=" container content-wrapper">
                <Row>

                    {screenSize > 769 ?
                        <Col md={3} lg={3}>
                            <Card className='filtration-view-card'>
                                <CardBody>
                                    <div className='filter-sections'>
                                        <h2 className='filter-topic'> Preferred time</h2>
                                        {preferredTime.map((item, index) =>
                                            <FormGroup className='check-box-filter'>
                                                <Checkbox
                                                    label={`${item.name} (${item.count})`}
                                                />
                                            </FormGroup>
                                        )}
                                    </div>
                                    <hr/>
                                    <div className='filter-sections'>
                                        <h2 className='filter-topic'> Extra tasks</h2>
                                        {extraTasks.map((item, index) =>
                                            <FormGroup className='check-box-filter'>
                                                <Checkbox
                                                    label={`${item.name} (${item.count})`}
                                                />
                                            </FormGroup>
                                        )}
                                    </div>

                                    <hr/>
                                    <div className='filter-sections'>
                                        <h2 className='filter-topic'>Service types</h2>
                                        {serviceType.map((item, index) =>
                                            <FormGroup className='check-box-filter'>
                                                <Checkbox
                                                    label={`${item.name} (${item.count})`}
                                                />
                                            </FormGroup>
                                        )}
                                    </div>

                                </CardBody>
                            </Card>
                        </Col>
                        : <Sidebar
                            sidebar={<Card className='filtration-view-card'>
                                <CardBody>
                                    <div className='filter-sections'>
                                        <span className='d-flex justify-content-end'> <Icon.X
                                            style={{cursor: 'pointer'}} onClick={() => this.onSetSidebarOpen(false)}/> </span>
                                        <h2 className='filter-topic'> Preferred time</h2>
                                        {preferredTime.map((item, index) =>
                                            <FormGroup className='check-box-filter'>
                                                <Checkbox
                                                    label={`${item.name} (${item.count})`}
                                                />
                                            </FormGroup>
                                        )}
                                    </div>
                                    <hr/>
                                    <div className='filter-sections'>
                                        <h2 className='filter-topic'> Extra tasks</h2>
                                        {extraTasks.map((item, index) =>
                                            <FormGroup className='check-box-filter'>
                                                <Checkbox
                                                    label={`${item.name} (${item.count})`}
                                                />
                                            </FormGroup>
                                        )}
                                    </div>

                                    <hr/>
                                    <div className='filter-sections'>
                                        <h2 className='filter-topic'>Service types</h2>
                                        {serviceType.map((item, index) =>
                                            <FormGroup className='check-box-filter'>
                                                <Checkbox
                                                    label={`${item.name} (${item.count})`}
                                                />
                                            </FormGroup>
                                        )}
                                    </div>

                                </CardBody>
                            </Card>}
                            open={this.state.sidebarOpen}
                            onSetOpen={this.onSetSidebarOpen}
                            styles={{sidebar: {background: "white"}}}
                        >
                            <div className="container">
                                <Row>
                                    <Col md={12}>
                                        <Button className='btn-common btn-filter-sideBar'
                                                onClick={() => this.onSetSidebarOpen(true)}>
                                            Filter Details
                                        </Button>
                                    </Col>
                                </Row>
                            </div>
                        </Sidebar>
                    }

                    <Col md={12} lg={9} className='filter-data-wrapper'>
                        <Row>
                            <Col md={12} lg={12}>
                                <Card className='availableCard'>
                                    <CardBody>
                                        <h1 className='available-result-txt'>{availableCount} results available
                                            on <span>{searchDate}</span></h1>
                                    </CardBody>
                                </Card>
                            </Col>


                            <Col md={12} lg={12} className='my-5'>
                                <Row>
                                    <Col md={12} lg={6}>
                                        <Button className='btn-common btn-modify'> Modify search</Button>

                                    </Col>
                                    <Col md={12} lg={6} className='d-flex justify-content-lg-end'>
                                          <span className='drp-dwn-filter'><span>Sort by{' '}</span>
                                    <Dropdown placeholder='sort by' search selection options={friendOptions}/>
                                </span>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={12} lg={12} className='filtered-data-view'>
                                {filterDate.map((item, index) => <Card key={index} className="data-card-wrapper">
                                        <CardBody>

                                            <div className='d-flex flex-row justify-content-between'>
                                                <div>
                                                    <h1>{item.itemName}</h1>
                                                    <small>{item.companyName}</small>
                                                    <StarPicker size={22} value={item.starCount}/>
                                                </div>

                                                <div>
                                                    <h3>From {item.priceRange}</h3>
                                                </div>
                                            </div>

                                            <p>{item.companyDesc}</p>

                                            <div className="d-flex justify-content-end">
                                                <Button className='btn-common btn-selectCleaner'> <Link
                                                    style={{color:'white'}}
                                                    to={{
                                                        pathname: PLACE_SERVICE_PATH,
                                                        state: {item }// your data array of objects
                                                    }}>
                                                    Select cleaner
                                                </Link></Button>
                                            </div>

                                        </CardBody>
                                    </Card>
                                )}
                            </Col>


                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    }
}

export default FilterDetails;