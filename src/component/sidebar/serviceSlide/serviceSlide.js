import React from "react";
import Sidebar from "../../../@core/components/sidebar";
import {Col, Input, Row} from "antd";
import {Button, CardBody, Label} from "reactstrap";
import InputPasswordToggle from "../../../@core/components/input-password-toggle";
import '../sidebarStyles.scss'
import {UserPlus} from "react-feather";

class ServiceSlide extends React.Component {

    handleInput = (event) => {
        let {name, value} = event.target;
        this.setState({[name]: value});
    };

    render() {
        let {open, toggleSidebar} = this.props
        return <Sidebar
            cusSize={'50%'}
            size='xl'
            open={open}
            title={'Update User Details'}
            headerClassName='mb-1'
            contentClassName='pt-0'
            toggleSidebar={toggleSidebar}
        >
            <Row>


                <Col className='update-user-wrapper' xs={{span: 24}} sm={{span: 24}} md={{span: 12}} lg={{span: 12}}>
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

                <Col className='update-user-wrapper' xs={{span: 24}} sm={{span: 24}} md={{span: 24}}>
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

                <Col className='update-user-wrapper' xs={{span: 24}} sm={{span: 24}} md={{span: 24}}>
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

                <Col className='update-user-wrapper' xs={{span: 24}} sm={{span: 24}} md={{span: 24}}>
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

                <Col className='update-user-wrapper' xs={{span: 24}} sm={{span: 24}} md={{span: 24}}>
                    <Label for="txtEmail">
                        Password
                    </Label>
                    <InputPasswordToggle
                        placeholder={'password'}
                    />

                </Col>


                <Col className='update-user-wrapper' xs={{span: 24}} sm={{span: 24}} md={{span: 24}}>
                    <Label for="txtEmail">
                        Confirm Password
                    </Label>
                    <InputPasswordToggle
                        placeholder={'confirm password'}
                    />
                </Col>

            </Row>

            <Row className='d-flex justify-content-end'>
                <Col className='w-100  btn-update-wrapper' xs={{span: 24}} sm={{span: 24}} md={{span: 24}}>
                    <Button className='w-100 btn-common' color="primary">
                        <UserPlus size={18} color='#fff'/> Add User
                    </Button>
                </Col>
            </Row>
        </Sidebar>
    }

}

export default ServiceSlide;