import React from "react";
import './landing.scss'
import Header from "../../components/Header/Header";
import clean from '../../assets/img/cleaning Img.jpg'
import * as Icon from 'react-feather'
import {Button, Card, CardBody, Col, Row} from "reactstrap";
import {Input} from 'semantic-ui-react'
import Footer from "../../components/Footer/Footer";
import {Link} from "react-router-dom";
import {FILTER_PATH} from "../../constants/constant";

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
                                                <Input className='w-100' iconPosition='left' icon='search'
                                                       placeholder='Search...'/>
                                            </Col>
                                            <Col md={4}>
                                                <Input className='w-100' iconPosition='left' icon='calendar'
                                                       placeholder='Search...'/>
                                            </Col>
                                            <Col md={3}>
                                                <Button  className='btn-common btn-calender'> <Link style={{color:"white"}} to={FILTER_PATH}>
                                                    Find your calender
                                                </Link> </Button>
                                            </Col>
                                        </Row>


                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </div>


                <div className="container service-list">
                    <Row>
                        <Col sm={12} md={12} lg={12} className='text-center'>
                            <h1 className='service-topic'>Our Local house cleaning services</h1>
                            <h4 className='service-sub-topic
                            '>Lorem ipsum dolor sit amet consectetur</h4>
                        </Col>
                    </Row>

                    <Row className="service-card-wrapper">
                        <Col className="service-card" sm={12} md={12} lg={4}>
                            <Card>
                                <CardBody className='service-card-body'>
                                 <span className="view-icon">
                                       <span> <Icon.Instagram color='white' size={32}/></span>
                                 </span>
                                    <h1 className="service-name">
                                        Lorem ipsum dolo
                                    </h1>
                                    <p className="service-desc">Lorem ipsum dolor sit amet, consectetur adipisicing
                                        elit. Ad, adipisci consequatur, dicta dolore doloremque dolorum ea eum ex
                                        exercitationem.</p>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col className="service-card" sm={12} md={12} lg={4}>
                            <Card>
                                <CardBody className='service-card-body'>
                                 <span className="view-icon">
                                       <span> <Icon.Instagram color='white' size={32}/></span>
                                 </span>
                                    <h1 className="service-name">
                                        Lorem ipsum dolo
                                    </h1>
                                    <p className="service-desc">Lorem ipsum dolor sit amet, consectetur adipisicing
                                        elit. Ad, adipisci consequatur, dicta dolore doloremque dolorum ea eum ex
                                        exercitationem.</p>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col className="service-card" sm={12} md={12} lg={4}>
                            <Card>
                                <CardBody className='service-card-body'>
                                 <span className="view-icon">
                                       <span> <Icon.Instagram color='white' size={32}/></span>
                                 </span>
                                    <h1 className="service-name">
                                        Lorem ipsum dolo
                                    </h1>
                                    <p className="service-desc">Lorem ipsum dolor sit amet, consectetur adipisicing
                                        elit. Ad, adipisci consequatur, dicta dolore doloremque dolorum ea eum ex
                                        exercitationem.</p>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>


                <div className="apply-online-section">
                    <div className="container">
                        <Row>
                            <Col sm={12} md={12} lg={8}>
                                <h1 className='apply-topic'>Join with Us, as a company or cleaner</h1>
                                <p className='apply-subText'>Lorem ipsum dolor sit amet, consectetur adipisicing elit
                                    consectetur adipisicingur adipisicing
                                    elit</p>

                                <p className="apply-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Aspernatur autem cupiditate, dolores itaque labore libero officia quaerat ut. Ab
                                    aperiam architecto, consectetur deleniti deserunt distinctio facilis fugit quibusdam
                                    sed voluptatibus cupiditate, dolores itaque labore libero officia quaerat ut. Ab
                                    aperiam architecto, consectetur deleniti deserunt distinctio facilis fugit quibusdam
                                    sed voluptatibus!</p>

                                <Button className='btn-common btn-apply-online'> Apply Online </Button>
                            </Col>
                            <Col sm={12} md={12} lg={4}>
                                <img src={clean} alt="apply-online-img" className="img-apply-online"/>
                            </Col>
                        </Row>
                    </div>

                </div>

                <Footer/>

            </div>
        );
    }
}

export default Landing;

