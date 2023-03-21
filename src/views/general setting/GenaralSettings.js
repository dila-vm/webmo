import {Card, CardHeader, CardBody, CardTitle, CardText, CardLink, Label, Button, FormGroup} from 'reactstrap'
import React from "react"
import {Col, Divider, Input, Row, Select, Table} from "antd"
import './genaralSetting.scss'
import {userActive, userRoles} from "../../constatnts/DropdownValues"
import {itemDetailsColumns} from "../../constatnts/TabeleColumDetails"
import DataTable from "react-data-table-component"
import {Award, ChevronDown, PlusCircle, UserPlus} from "react-feather"
import {debounce} from '../../utility/CommonFun'
import UserUpdate from "../../component/sidebar/userUpdate/UserUpdate";
import {customToastMsg} from "../../utility/Utils";

class GeneralSettings extends React.Component {

    state = {
        userName: '',
        isOpen: false
    };

    constructor(props) {
        super(props);
        this.debouncedFetch = debounce(this.fetchData, 1000);
    }

    fetchData(input) {
        if (input !== '') {
            console.log(input);
        } else {
            console.log('empty now')
        }
    }

    handleInput = (event) => {
        let {name, value} = event.target
        const newSearchInput = event.target.value;
        this.setState({[name]: value});
        this.debouncedFetch(newSearchInput);
    };


    render() {
        const details = [
            {
                id: '1',
                itemName: 'Item Name 01',
                status: 'INACTIVE',
                action: <div>
                    <Button outline className='mr-1' color='warning'
                            onClick={() => this.setState({isOpen: true})}> Update </Button>
                    <Button
                        onClick={(e) => customToastMsg('temp', 0, 'lorem tem msglorem tem msglorem tem msglorem tem msg!')}
                        outline color='danger'> Delete </Button>
                </div>
            }, {
                id: '2',
                itemName: 'package Name 02',
                status: 'INACTIVE',
                action: <div>
                    <Button outline className='mr-1' color='warning'
                            onClick={() => this.setState({isOpen: true})}> Update </Button>
                    <Button
                        onClick={(e) => customToastMsg('temp', 0, 'lorem tem msglorem tem msglorem tem msglorem tem msg!')}
                        outline color='danger'> Delete </Button>
                </div>
            }
        ];

        let {isOpen} = this.state;
        return (
            <div>
                <Card className='userManage'>

                    <CardHeader>
                        <Row className='w-100'>
                            <Col xs={{span: 24}} sm={{span: 24}} md={{span: 21}} lg={{span: 21}}>
                                <h1>General Settings</h1>
                            </Col>
                            <Col xs={{span: 24}} sm={{span: 24}} md={{span: 21}} lg={{span: 21}}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At debitis facilis iste
                                    laudantium molestiae non nulla praesentium tempore veritatis voluptates! Est, et
                                    molestias nisi officiis provident veniam vitae. Debitis, quasi.adipisicing elit. At
                                    debitis facilis iste
                                    laudantium molestiae non nulla praesentium tempore veritatis voluptates! Est, et
                                    molestias nisi officiis provident veniam vitae. Debitis, quasi.adipisicing elit. At
                                    debitis facilis iste
                                    laudantium molestiae non nulla praesentium tempore veritatis voluptates! Est, et
                                    molestias nisi officiis provident veniam vitae. Debitis, quasi.</p>
                            </Col>

                            <FormGroup row className='mt-2 w-100'>
                            <Label
                                for="exampleEmail"
                                sm={12}
                                md={2}
                            >
                                Free Time
                            </Label>
                            <Col sm={12} md={10}>
                                <Input
                                    id="exampleEmail"
                                    name="email"
                                    placeholder="free time"
                                    type="email"
                                />
                            </Col>
                        </FormGroup>


                            <FormGroup row className=' w-100'>
                                <Label
                                    for="exampleEmail"
                                    sm={12}
                                    md={2}
                                >
                                    Email
                                </Label>
                                <Col sm={12} md={10}>
                                    <Input
                                        id="exampleEmail"
                                        name="email"
                                        placeholder="with a placeholder"
                                        type="email"
                                    />
                                </Col>
                            </FormGroup>

                        </Row>
                    </CardHeader>
                    <CardBody>

                    </CardBody>
                </Card>


            </div>
        )
    }
}

export default GeneralSettings
