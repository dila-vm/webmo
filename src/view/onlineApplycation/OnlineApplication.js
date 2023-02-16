import React from "react";
import './onlineApplication.scss'
import Header from "../../components/Header/Header";
import {Button, Card, CardBody, Col, FormGroup, Input, Label, Row} from "reactstrap";

class OnlineApplication extends React.Component {

    render() {
        return <div className="onlineApplication">
            <Header/>
            <div className="container">

                <Row>
                    <Col sm={12} md={12} lg={12}>
                        <Card>
                            <CardBody className='application-details-wrapper'>
                                <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos eius fuga illo
                                    laboriosam maxime nesciunt porro qui quos temporibus ullam.</h1>
                                <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>\

                                <div className="yourDetails">
                                    <h1 className="txt-topic">
                                        Your Details
                                    </h1>
                                    <hr/>


                                    <div className="details-wrapper">
                                        <Row className='type-row'>
                                            <Col md={1}>
                                                <Label
                                                    check
                                                    for="exampleCheck"
                                                >
                                                    Type
                                                </Label>
                                            </Col>
                                            <Col md={2}>
                                                <FormGroup check>
                                                    <Input
                                                        id="exampleCheck"
                                                        name="check"
                                                        type="checkbox"
                                                    />
                                                    <Label
                                                        check
                                                        for="exampleCheck"
                                                    >
                                                        Individual
                                                    </Label>

                                                </FormGroup>
                                            </Col>
                                            <Col md={2}>
                                                <FormGroup check>
                                                    <Input
                                                        id="exampleCheck"
                                                        name="check"
                                                        type="checkbox"
                                                    />
                                                    <Label
                                                        check
                                                        for="exampleCheck"
                                                    >
                                                        Company
                                                    </Label>

                                                </FormGroup>
                                            </Col>
                                        </Row>

                                        <Row className='inp-wrapper'>
                                            <Col md={2}>
                                                <FormGroup className='pr-2'>
                                                    <Input
                                                        name="select"
                                                        type="select"
                                                    >
                                                        <option>
                                                            Mr
                                                        </option>
                                                        <option>
                                                            Mrs
                                                        </option>
                                                        <option>
                                                            Miss
                                                        </option>


                                                    </Input>
                                                </FormGroup>
                                            </Col>
                                            <Col md={6} lg={6} className='input-filed'>
                                                <FormGroup>
                                                    <Input
                                                        name="FirstName"
                                                        placeholder="First Name"
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col md={6} lg={6} className='input-filed'>
                                                <FormGroup>

                                                    <Input

                                                        name="LastName"
                                                        placeholder="Last Name"
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>

                                        <Row className='inp-wrapper'>

                                            <Col md={6} lg={6} className='input-filed'>
                                                <FormGroup>

                                                    <Input

                                                        name="mobile"
                                                        placeholder="Mobile"
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>

                                            <Col md={6} lg={6} className='input-filed'>
                                                <FormGroup>

                                                    <Input

                                                        name="landline"
                                                        placeholder="Landline"
                                                        type="number"
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>


                                        <Row className='inp-wrapper'>

                                            <Col md={6} lg={6} className='input-filed'>
                                                <FormGroup>

                                                    <Input

                                                        name="email"
                                                        placeholder="Email"
                                                        type="email"
                                                    />
                                                </FormGroup>
                                            </Col>


                                        </Row>

                                        <Row className=' inp-wrapper '>
                                            <Col md={6} lg={6} className='input-filed'>
                                                <FormGroup>

                                                    <Input

                                                        name="postalCode"
                                                        placeholder="Postal code"
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col md={6} lg={6}
                                                 className='justify-content-lg-between  d-flex input-filed'>
                                                <Button className='btn-common'>
                                                    Find Address
                                                </Button>
                                            </Col>
                                        </Row>

                                    </div>

                                </div>

                                <div className="yourDetails">
                                    <h1 className="txt-topic">
                                        Company Details
                                    </h1>
                                    <hr/>


                                    <div className="details-wrapper">

                                        <Row className='inp-wrapper'>
                                            <Col md={6} lg={6} className='input-filed'>
                                                <FormGroup>
                                                    <Input
                                                        name="FirstName"
                                                        placeholder="Company Name"
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col md={6} lg={6} className='input-filed'>
                                                <FormGroup>

                                                    <Input

                                                        name="LastName"
                                                        placeholder="Registration Number"
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>

                                        <Row className='inp-wrapper'>

                                            <Col md={6} lg={6} className='input-filed'>
                                                <FormGroup>

                                                    <Input

                                                        name="postal"
                                                        placeholder="Postal Code"
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>

                                            <Col md={6} lg={6} className='input-filed'>
                                                <FormGroup  check>
                                                    <Input
                                                        className='chk-input'
                                                        id="exampleCheck"
                                                        name="check"
                                                        type="checkbox"
                                                    />
                                                    <Label
                                                        check
                                                        className='chk-lbl'
                                                    >
                                                        Same as above
                                                    </Label>

                                                </FormGroup>
                                            </Col>
                                        </Row>


                                        <Row className='inp-wrapper mt-3'>

                                            <Col md={6} lg={6} className='input-filed'>
                                                <FormGroup>

                                                    <Input

                                                        name="email"
                                                        placeholder="Number of Employees"
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>

                                            <Col md={6} lg={6} className='input-filed'>
                                                <FormGroup>

                                                    <Input

                                                        name="experience"
                                                        placeholder="Years of experience"
                                                        type="number"
                                                    />
                                                </FormGroup>
                                            </Col>


                                        </Row>

                                        <Row className=' inp-wrapper '>
                                            <Col md={10} lg={10} className='input-filed'>
                                                <FormGroup>

                                                    <Input
                                                        name="company"
                                                        placeholder="About your company"
                                                        type="textarea"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col md={6} lg={6}
                                                 className='justify-content-lg-between  d-flex input-filed'>
                                                <Button className='btn-common'>
                                                   Register
                                                </Button>
                                            </Col>
                                        </Row>

                                    </div>

                                </div>

                            </CardBody>
                        </Card>
                    </Col>
                </Row>

            </div>

        </div>
    }
}

export default OnlineApplication