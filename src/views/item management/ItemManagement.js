import {Card, CardHeader, CardBody, CardTitle, CardText, CardLink, Label, Button} from 'reactstrap'
import React from "react"
import {Col, Divider, Input, Row, Select, Table} from "antd"
import './itemmanagement.scss'
import {userActive, userRoles} from "../../constatnts/DropdownValues"
import {itemDetailsColumns} from "../../constatnts/TabeleColumDetails"
import DataTable from "react-data-table-component"
import {Award, ChevronDown, PlusCircle, UserPlus} from "react-feather"
import {debounce} from '../../utility/CommonFun'
import UserUpdate from "../../component/sidebar/userUpdate/UserUpdate";
import {customToastMsg} from "../../utility/Utils";
import ItemSlider from "../../component/sidebar/itemSlide/ItemSlider";
import ServiceSlide from "../../component/sidebar/serviceSlide/serviceSlide";

class ManageItem extends React.Component {

    state = {
        userName: '',
        type: '',
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
                            onClick={() => this.setState({isOpen: true,type:'UPDATE'})}> Update </Button>
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
                            onClick={() => this.setState({isOpen: true,type:'UPDATE'})}> Update </Button>
                    <Button
                        onClick={(e) => customToastMsg('temp', 0, 'lorem tem msglorem tem msglorem tem msglorem tem msg!')}
                        outline color='danger'> Delete </Button>
                </div>
            }
        ];

        let {isOpen,type} = this.state;
        return (
            <div>
                <Card className='userManage'>

                    <CardHeader>
                        <Row className='w-100'>
                            <Col xs={{span: 24}} sm={{span: 24}} md={{span: 21}} lg={{span: 21}}>
                                <h1>Manage Items</h1>
                            </Col>

                            <Col xs={{span: 24}} sm={{span: 24}} md={{span: 2}} lg={{span: 3}}>
                                <Button onClick={() => this.setState({isOpen: true,type:'ADD'})} className='w-100 btn-common' color="primary">
                                    <PlusCircle size={18} color='#fff'/> Add Item
                                </Button>
                            </Col>
                        </Row>
                    </CardHeader>
                    <CardBody>
                        <Row className='w-100'>

                            <Col className='filterName w-100' sm={{span: 24}} md={{span: 6}}>
                                <Label for="txtRoleName">
                                    Item Name
                                </Label>
                                <Input
                                    className='w-100'
                                    id="txtUserName"
                                    name="userName"
                                    onChange={(e) => this.handleInput(e)}
                                    placeholder="search by username"
                                    type="text"
                                />


                            </Col>


                            <Col className='filterName w-100' sm={{span: 24}} md={{span: 6}}>
                                <Label for="txtRoleName">
                                    Item Status
                                </Label>
                                <Select
                                    className='w-100'
                                    onChange={() => console.log()}
                                    placeholder='select status'
                                    options={userActive}
                                />

                            </Col>

                        </Row>


                        <Row className='tbl-userDetails'>
                            <Col md={{span: 24}}>
                                <DataTable
                                    border={true}
                                    noHeader
                                    pagination={true}
                                    paginationServer
                                    subHeader={false}
                                    columns={itemDetailsColumns}
                                    subHeaderWrap
                                    responsive={true}
                                    sortIcon={<ChevronDown/>}
                                    className='react-dataTable pb-2'
                                    defaultSortField='invoiceId'
                                    data={details}
                                />
                            </Col>
                        </Row>

                    </CardBody>
                </Card>

                <ItemSlider
                    toggleSidebar={() => {

                        this.setState({isOpen: false})
                    }}
                    type={type}
                    open={isOpen}/>
            </div>
        )
    }
}

export default ManageItem
