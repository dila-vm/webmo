import React from "react";
import '../ManageUsers'
import {Button, Card, CardBody, CardHeader, Label} from "reactstrap";
import {Col, Input, Row, Select} from "antd";
import InputPasswordToggle from "../../../@core/components/input-password-toggle";
import {UserPlus} from "react-feather";

class AddUsers extends React.Component {

    state = {
        userName:''
    };

    handleInput = (event) => {
        let {name,value} = event.target;
        this.setState({ [name]:value});
    };


    render() {
        return <div>
            <Card className='userManage'>

                <CardHeader>
                    <h1>Add Users</h1>
                </CardHeader>
                <CardBody>

                    <Row>


                        <Col className='filterName'  xs={{span: 24}} sm={{span: 24}} md={{span: 12}}>
                            <Label for="txtUserName">
                                First Name
                            </Label>
                            <Input
                                id="txtFirstName"
                                onChange={(e) => this.handleInput(e)}
                                name="firstName"
                                placeholder="first name"
                                type="text"
                            />
                        </Col>

                        <Col className='filterName'  xs={{span: 24}} sm={{span: 24}} md={{span: 12}}>
                            <Label for="txtRoleName">
                                Last Name
                            </Label>
                            <Input
                                id="txtFirstName"
                                onChange={(e) => this.handleInput(e)}
                                name="firstName"
                                placeholder="last name"
                                type="text"
                            />

                        </Col>

                        <Col className='filterName' xs={{span: 24}} sm={{span: 24}} md={{span: 12}}>
                            <Label for="txtRoleName">
                               User Name
                            </Label>
                            <Input
                                id="txtFirstName"
                                onChange={(e) => this.handleInput(e)}
                                name="firstName"
                                placeholder="user name"
                                type="text"
                            />

                        </Col>

                        <Col className='filterName' xs={{span: 24}} sm={{span: 24}} md={{span: 12}}>
                            <Label for="txtEmail">
                              Email
                            </Label>
                            <Input
                                id="txtEmail"
                                onChange={(e) => this.handleInput(e)}
                                name="email"
                                placeholder="email"
                                type="email"
                            />

                        </Col>

                        <Col className='filterName' xs={{span: 24}} sm={{span: 24}} md={{span: 12}}>
                            <Label for="txtEmail">
                              Password
                            </Label>
                            <InputPasswordToggle
                                placeholder={'password'}
                            />

                        </Col>


                        <Col className='filterName' xs={{span: 24}} sm={{span: 24}} md={{span: 12}}>
                            <Label for="txtEmail">
                             Confirm Password
                            </Label>
                            <InputPasswordToggle
                                placeholder={'confirm password'}
                            />

                        </Col>

                    </Row>


                    <Row className='d-flex justify-content-end'>
                        <Col className='w-100  btn-wrapper' xs={{span: 24}} sm={{span: 24}} md={{span: 3}}>
                            <Button className='w-100 btn-common' color="primary">
                        <UserPlus size={18} color='#fff'/> Save
                        </Button>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </div>
    }
}

export default AddUsers;