import React from "react";
import './footer.scss'
import logo from '../../assets/img/logos/whitelogo.png';
import {Link} from "react-router-dom";
import {Button, Col, Input, Row} from "reactstrap";

class Footer extends React.Component {

    render() {
        return (
            <div className='footer'>
                <div className='container'>
                    <Row className='py-5'>
                        <Col md={3}>
                            <img src={logo} alt=""/>
                        </Col>
                        <Col md={3}>
                            <span>Melbourne</span>
                            <p> Level 1, Unit 9 / 677 <br/> Springvale Road,<br/> Mulgrave VIC 3170</p>

                            <span className='mt-5'>Colombo</span>
                            <p> Level 4, 46/38, <br/> Navam Mawatha, <br/> Colombo 02, 00200</p>

                        </Col>
                        <Col md={3}>
                            <span>Work inquiries</span>
                            <p> Interested in working with us? <br/> hello@empite.com</p>
                        </Col>
                        <Col md={3}>
                            <span>Stay in touch</span>
                            <div className='sub-input'><Input/> <Button>Subscribe</Button></div>
                        </Col>
                    </Row>
                </div>
            </div>

        );
    }
}

export default Footer;