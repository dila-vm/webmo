import React from "react";
import './footer.scss'
import logo from '../../assets/img/logos/whitelogo.png';
import {Link} from "react-router-dom";
import {Button, Col, Input, Row} from "reactstrap";
import * as Icon from 'react-feather'

class Footer extends React.Component {

    render() {
        return (
            <div className='footer'>
                <div className='container'>
                    <Row className='py-5'>

                        <Col md={3}>
                            <h3>Explore</h3>
                            <p>About</p>
                            <p>How it work</p>
                            <p>FAQs</p>
                            <p>News</p>
                            <p>Careers</p>
                        </Col>

                        <Col md={3}>
                            <h3>Services</h3>
                            <p>Regular cleaning</p>
                            <p>One - off cleaning</p>
                            <p>End of tenancy cleaning </p>
                            <p>Deep cleaning</p>
                            <p>After builders </p>
                            <p>Commercial cleaning</p>
                            <p>Plumber </p>
                            <p>More services ...</p>
                        </Col>

                        <Col md={3}>
                            <h3>Available in</h3>

                            <p>East London </p>
                            <p> North London </p>
                            <p>South East London </p>
                            <p> South London</p>
                            <p>More locations ...</p>
                        </Col>

                        <Col md={3}>
                            <h3>Contact Us</h3>

                            <p>+44 079 7628 228</p>
                            <br/>
                            <p>92 Laring Road, <br/>New York</p>
                            <br/>
                            <p>abc@gmail.com</p>

                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12} lg={12} className="d-flex justify-content-end social-media-link">
                            <Icon.Facebook size={26} fill='#414141' color='414141'/>
                            <Icon.Instagram size={26}  color='#414141'/>
                            <Icon.Youtube size={26}  color='#414141'/>
                            <Icon.Twitter size={26}  fill='#414141' color='#414141'/>
                            <Icon.Linkedin size={26}  fill='#414141' color='#414141'/>
                        </Col>
                    </Row>

                </div>
            </div>

        );
    }
}

export default Footer;