import {Card, CardHeader, CardBody, CardTitle, CardText, CardLink, Label, Button} from 'reactstrap'
import React from "react"
import {Col, Divider, Input, Row, Select, Table} from "antd"
import './UserManage.scss'
import {userActive, userRoles} from "../../constatnts/DropdownValues"
import {userDetailsColumns} from "../../constatnts/TabeleColumDetails"
import DataTable from "react-data-table-component"
import {ChevronDown, UserPlus} from "react-feather"
import {debounce} from '../../utility/CommonFun'
import UserUpdate from "../../component/sidebar/userUpdate/UserUpdate";

class ManageUsers extends React.Component {

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
                firstName: 'Dila',
                lastName: 'Vm',
                userRole: 'Admin',
                email: 'dila@gmail.com',
                status: 'ACTIVE',
                action: <div>
                    <Button outline className='mr-1' color='warning'
                            onClick={() => this.setState({isOpen: true})}> Update </Button>
                    <Button outline color='danger'> Delete </Button>
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
                                <h1>Manage Users</h1>

                            </Col>

                            <Col xs={{span: 24}} sm={{span: 24}} md={{span: 2}} lg={{span: 3}}>
                                <Button className='w-100 btn-common' color="primary">
                                    <UserPlus size={18} color='#fff'/> Add User
                                </Button>
                            </Col>
                        </Row>
                    </CardHeader>
                    <CardBody>
                        <Row>
                            <Col className='filterName' sm={{span: 24}} md={{span: 6}}>
                                <Label for="txtUserName">
                                    User Name
                                </Label>
                                <Input
                                    id="txtUserName"
                                    name="userName"
                                    onChange={(e) => this.handleInput(e)}
                                    placeholder="search by username"
                                    type="text"
                                />
                            </Col>

                            <Col className='filterName' sm={{span: 24}} md={{span: 6}}>
                                <Label for="txtUserName">
                                    First Name
                                </Label>
                                <Input
                                    id="txtFirstName"
                                    onChange={(e) => this.handleInput(e)}
                                    name="firstName"
                                    placeholder="search by first name"
                                    type="text"
                                />
                            </Col>

                            <Col className='filterName' sm={{span: 24}} md={{span: 6}}>
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

                            <Col className='filterName' sm={{span: 24}} md={{span: 6}}>
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
                                    columns={userDetailsColumns}
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

                <UserUpdate
                    toggleSidebar={() => {

                        this.setState({isOpen: false})
                    }}
                    open={isOpen}/>
            </div>
        )
    }
}

export default ManageUsers
