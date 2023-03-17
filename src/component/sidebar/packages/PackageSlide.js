import React from "react";
import Sidebar from "../../../@core/components/sidebar";
import {Col, Input, Row, Radio} from "antd";
import {Button, CardBody, Label} from "reactstrap";
import InputPasswordToggle from "../../../@core/components/input-password-toggle";
import '../sidebarStyles.scss'
import {UserPlus} from "react-feather";

class PackageSlide extends React.Component {

    state = {
        value: ''
    }

    handleInput = (event) => {
        let {name, value} = event.target;
        this.setState({[name]: value});
    };

    onChange1 = ({ target: { value } }) => {
        console.log('radio1 checked', value);
     //   setValue1(value);
    };

    render() {
        let {open, toggleSidebar, type} = this.props;

        const plainOptions = ['Apple', 'Pear', 'Orange'];

        return <Sidebar
            size='lg'
            open={open}
            title={type === 'ADD' ? 'Add New Package' : 'Update Package'}
            headerClassName='mb-1'
            contentClassName='pt-0'
            toggleSidebar={toggleSidebar}
        >

            {type === 'ADD' ?

                <div>
                    <Row>
                        <Col className='update-user-wrapper' xs={{span: 24}} sm={{span: 24}} md={{span: 24}}>
                            <Label for="packageName">
                                Package Name
                            </Label>
                            <Input
                                id="packageName"
                                onChange={(e) => this.handleInput(e)}
                                name="packageName"
                                placeholder="package name"
                                type="text"
                            />
                        </Col>

                        <Col className='update-user-wrapper' xs={{span: 24}} sm={{span: 24}} md={{span: 24}}>
                            <Label for="description">
                                Package Description
                            </Label>
                            <Input
                                id="description"
                                onChange={(e) => this.handleInput(e)}
                                name="description"
                                placeholder="package description"
                                type="text"
                            />
                        </Col>

                        <Col className='update-user-wrapper' xs={{span: 24}} sm={{span: 24}} md={{span: 24}}>
                            <Label for="numberOfUsers">
                                Number Of Users
                            </Label>
                            <Input
                                id="numberOfUsers"
                                onChange={(e) => this.handleInput(e)}
                                name="numberOfUsers"
                                placeholder="number of users"
                                type="number"
                            />
                        </Col>


                        <Col className='update-user-wrapper' xs={{span: 24}} sm={{span: 24}} md={{span: 24}}>
                            <Label for="packagePrice">
                                Package Price
                            </Label>
                            <Input
                                id="packagePrice"
                                onChange={(e) => this.handleInput(e)}
                                name="packagePrice"
                                placeholder="package price"
                                type="number"
                            />
                        </Col>


                        <Col className='update-user-wrapper' xs={{span: 24}} sm={{span: 24}} md={{span: 24}}>
                            <Label for="additionalUserCharges">
                                Additional User Charges
                            </Label>
                            <Input
                                id="additionalUserCharges"
                                onChange={(e) => this.handleInput(e)}
                                name="additionalUserCharges"
                                placeholder="additional user charges"
                                type="number"
                            />
                        </Col>

                        <Col className='update-user-wrapper' xs={{span: 24}} sm={{span: 24}} md={{span: 24}}>
                            <Label for="discount">
                                Discount
                            </Label>
                            <Input
                                id="discount"
                                onChange={(e) => this.handleInput(e)}
                                name="discount"
                                placeholder="discount"
                                type="number"
                            />
                        </Col>


                        <Col className='update-user-wrapper' xs={{span: 24}} sm={{span: 24}} md={{span: 24}}>
                            <Label for="discount">
                                Discount
                            </Label>
                            <br/>
                            <Radio.Group options={plainOptions} onChange={()=>this.onChange1()} value={value1}/>

                        </Col>

                    </Row>

                    <Row className='d-flex justify-content-end'>
                        <Col className='w-100  btn-update-wrapper' xs={{span: 24}} sm={{span: 24}} md={{span: 24}}>
                            <Button className='w-100 btn-common' color="primary">
                                <UserPlus size={18} color='#fff'/> Add Package
                            </Button>
                        </Col>
                    </Row>
                </div> : <div></div>}

        </Sidebar>
    }

}

export default PackageSlide;