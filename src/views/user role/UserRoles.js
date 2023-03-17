import {Card, CardHeader, CardBody, CardTitle, CardText, CardLink, Label, Button} from 'reactstrap'
import React from "react"
import {Col, Divider, Input, Row, Select, Table} from "antd"
import './userRole.scss'
import {userActive, userRoles} from "../../constatnts/DropdownValues"
import {userDetailsColumns, userRoleDetailsColumns} from "../../constatnts/TabeleColumDetails"
import DataTable from "react-data-table-component"
import {Award, ChevronDown, PlusCircle, UserPlus} from "react-feather"
import {debounce} from '../../utility/CommonFun'
import UserUpdate from "../../component/sidebar/userUpdate/UserUpdate";
import {customToastMsg} from "../../utility/Utils";
import UserRoleSlider from "../../component/sidebar/addUserRole/UserRoleSlider";

class ManageUserRole extends React.Component {

    state = {
        userRole: '',
        isOpen: false,
        type: ''
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
                userRole: 'Admin',
                status: 'INACTIVE',
                action: <div>
                    <Button outline className='mr-1' color='warning'
                            onClick={() => this.setState({isOpen: true, type: 'UPDATE'})}> Update </Button>
                    <Button
                        onClick={(e) => customToastMsg('temp', 0, 'lorem tem msglorem tem msglorem tem msglorem tem msg!')}
                        outline color='danger'> Delete </Button>
                </div>
            }
        ];

        let {isOpen, type} = this.state;
        return (
            <div>
                <Card className='userManage'>

                    <CardHeader>
                        <Row className='w-100'>
                            <Col xs={{span: 24}} sm={{span: 24}} md={{span: 20}} lg={{span: 20}}>
                                <h1>Manage User Role</h1>

                            </Col>

                            <Col xs={{span: 24}} sm={{span: 24}} md={{span: 4}} lg={{span: 4}}>
                                <Button onClick={() => this.setState({isOpen: true, type: 'ADD'})}
                                        className='w-100 btn-common' color="primary">
                                    <PlusCircle size={18} color='#fff'/> Add User Role
                                </Button>
                            </Col>
                        </Row>
                    </CardHeader>
                    <CardBody>
                        <Row className='w-100'>
                            <Col className='filterName w-100' sm={{span: 24}} md={{span: 6}}>
                                <Label for="txtRoleName">
                                    User Role
                                </Label>
                                <Select
                                    className='w-100'
                                    onChange={() => console.log()}
                                    placeholder='select role'
                                    options={userRoles}
                                />

                            </Col>

                            <Col className='filterName w-100' sm={{span: 24}} md={{span: 6}}>
                                <Label for="txtRoleName">
                                    User Status
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
                                    columns={userRoleDetailsColumns}
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

                <UserRoleSlider
                    toggleSidebar={() => {

                        this.setState({isOpen: false})
                    }}
                    type={type}
                    open={isOpen}/>
            </div>
        )
    }
}

export default ManageUserRole
