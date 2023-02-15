import React from "react";
import './landing.scss'
import Header from "../../components/Header/Header";
import clean from '../../assets/img/cleaning Img.jpg'
import * as Icon from 'react-feather'
import {Button, Card, CardBody, Col, Row} from "reactstrap";
import {Input} from 'semantic-ui-react'

class Landing extends React.Component {
    state = {
        progress: 86
    };

    render() {
        let {progress} = this.state;
        return (
            <div className='landing'>
                <Header/>

                <div className=" hero-section" style={{backgroundImage: `url(${clean})`}}>
                    <div className="container hero-wrapper">
                        <Row>
                            <Col sm={12} md={12} lg={8} xl={9}>
                                <p className='start-text'> <span className="star-wrapper">
                        <Icon.Star color='#FFEE00' fill='#FFEE00'/>
                        <Icon.Star color='#FFEE00' fill='#FFEE00'/>
                        <Icon.Star color='#FFEE00' fill='#FFEE00'/>
                        <Icon.Star color='#FFEE00' fill='#FFEE00'/>
                        <Icon.Star color='#FFEE00' fill='#FFEE00'/>
                    </span> Lorem ipsum dolor sit amet, consectetur </p>

                                <h1>Your Cleaning Partner</h1>

                                <p className='abt-text'>Lorem ipsum dolor sit amet, consectetur. <br/> adipisicing elit
                                    Adipisci aperiam et
                                    eum excepturi
                                    magni
                                    mollitia nemo nesciunt suscipit ullam.</p>

                                <Card className='filter-card'>
                                    <CardBody>
                                        <Row className='filter-wrapper'>
                                            <Col md={4}>
                                                <Input className='w-100' iconPosition='left' icon='search' placeholder='Search...'/>
                                            </Col>
                                            <Col md={4}>
                                                <Input className='w-100' iconPosition='left' icon='calendar' placeholder='Search...'/>
                                            </Col>
                                            <Col md={3}>
                                            <Button className='btn-common btn-calender'> Find your calender</Button>
                                        </Col>
                                        </Row>


                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </div>

            </div>
        );
    }
}

export default Landing;

