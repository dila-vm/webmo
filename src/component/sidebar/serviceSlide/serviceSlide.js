import React from "react";
import Sidebar from "../../../@core/components/sidebar";
import {Col, Row} from "antd";
import {Button, ButtonGroup, CardBody, Input, Label} from "reactstrap";
import Select from 'react-select'
import '../sidebarStyles.scss'
import {UserPlus} from "react-feather";
import makeAnimated from 'react-select/animated';
import ReactEditList, * as REL from "react-edit-list";
import {customSweetAlert} from "../../../utility/Utils";
import icon from '../../../assets/images/avatars/1-small.png'
import ServiceSelector from "../../selector/ServiceSelector";
import {element} from "prop-types";

class ServiceSlide extends React.Component {

    state = {
        selectedServices: [],
        selectedItems: []
    };

    handleInput = (event) => {
        let {name, value} = event.target;
        this.setState({[name]: value});
    };

    selectService = (event) => {
        this.setState({selectedServices: [...this.state.selectedServices, event]})
    };

    getSelectedCategories = async (e) => {
        await this.setState({selectedItems: [...this.state.selectedItems, e]})

    };
    checkValidity = () => {
        let arr = this.state.selectedItems
        const uniqueArr = Array.from(arr.reduce((map, obj) => {
            return map.set(obj.id, obj);
        }, new Map()).values());
        console.log(this.state.selectedItems,uniqueArr)
    }

    render() {
        let {open, type, toggleSidebar} = this.props;
        const options = [
            {id: '1', value: 'chocolate', label: 'Chocolate', img: icon},
            {id: '2', value: 'strawberry', label: 'Strawberry', img: icon},
            {id: '3', value: 'asadef', label: 'fshnkanjsa', img: icon},
            {id: '4', value: 'chocolate', label: 'Chocolate', img: icon},
            {id: '5', value: 'strawberry', label: 'Strawberry', img: icon},
            {id: '6', value: 'asadef', label: 'fshnkanjsa', img: icon},
            {id: '7', value: 'asadef', label: 'fshnkanjsa', img: icon},
            {id: '8', value: 'chocolate', label: 'Chocolate', img: icon},
            {id: '9', value: 'strawberry', label: 'Strawberry', img: icon},
            {id: '10', value: 'asadef', label: 'fshnkanjsa', img: icon},
        ];


        return <Sidebar
            cusSize={'50%'}
            size='xl'
            open={open}
            title={type === 'ADD' ? 'Add New Service' : 'Update Service'}
            headerClassName='mb-1'
            contentClassName='pt-0'
            toggleSidebar={toggleSidebar}
        >
            {type === 'ADD' ? <div>
                <Row>
                    <Col className='update-user-wrapper' xs={{span: 24}} sm={{span: 24}} md={{span: 24}}
                         lg={{span: 24}}>
                        <Label for="serviceName">
                            Service Name
                        </Label>
                        <Input
                            id="serviceName"
                            onChange={(e) => this.handleInput(e)}
                            name="serviceName"
                            placeholder="service name"
                            type="text"
                        />
                    </Col>

                    <Col className='update-user-wrapper' xs={{span: 24}} sm={{span: 24}} md={{span: 24}}
                         lg={{span: 24}}>
                        <Label for="serviceDescription">
                            Service Description
                        </Label>
                        <Input
                            id="serviceDescription"
                            onChange={(e) => this.handleInput(e)}
                            name="serviceDescription"
                            placeholder="service description"
                            type="textarea"
                        />
                    </Col>


                    <Col className='update-user-wrapper' xs={{span: 24}} sm={{span: 24}} md={{span: 24}}
                         lg={{span: 24}}>
                        <Label for="serviceDescription">
                            Assign Items
                        </Label>

                        <Row className='w-100d-flex flex-row'>
                            {options.map((item, index) =>
                                <ServiceSelector key={index} getSelectedCategories={this.getSelectedCategories}
                                                 category={item} img={item.img} name={item.value}
                                                 isChecked={false}/>)}
                        </Row>

                    </Col>


                </Row>

                <Row className='d-flex justify-content-end'>
                    <Col className='w-100  btn-update-wrapper' xs={{span: 24}} sm={{span: 24}} md={{span: 24}}>
                        <Button onClick={() => this.checkValidity()} className='w-100 btn-common' color="primary">
                            <UserPlus size={18} color='#fff'/> Add Service
                        </Button>
                    </Col>
                </Row>
            </div> : <div>
                <Row>


                    <Col className='update-user-wrapper' xs={{span: 24}} sm={{span: 24}} md={{span: 12}}
                         lg={{span: 12}}>
                        <Label for="txtUserName">
                            Service Name
                        </Label>
                        <Input
                            id="txtFirstName"
                            onChange={(e) => this.handleInput(e)}
                            name="firstName"
                            placeholder="first name"
                            type="text"
                        />
                    </Col>

                </Row>

                <Row className='d-flex justify-content-end'>
                    <Col className='w-100  btn-update-wrapper' xs={{span: 24}} sm={{span: 24}} md={{span: 24}}>
                        <Button className='w-100 btn-common' color="primary">
                            <UserPlus size={18} color='#fff'/> Update Service
                        </Button>
                    </Col>
                </Row>
            </div>}
        </Sidebar>
    }

}

export default ServiceSlide;