import {Card, CardHeader, CardBody, CardTitle, CardText, CardLink, Label} from 'reactstrap'
import React from "react"
import {Col, Divider, Input, Row, Select, Table} from "antd"
import './UserManage.scss'
import {userRoles} from "../../constatnts/DropdownValues"
import {userDetailsColumns} from "../../constatnts/TabeleColumDetails"
import DataTable from "react-data-table-component"
import {ChevronDown} from "react-feather"
import {debounce} from '../../utility/CommonFun'
class ManageUsers extends React.Component {

    state = {
        userName:''
    };

    constructor(props) {
        super(props);
        this.debouncedFetch = debounce(this.fetchData, 1000);
    }

    fetchData(input) {
        if (input !== '') {
            console.log(input);
        }else{
            console.log('empty now')
        }
    }

    handleInput = (event) => {
        let {name,value} = event.target
        const newSearchInput = event.target.value;
        this.setState({ [name]:value});
        this.debouncedFetch(newSearchInput);
    };


    render() {
        const details = [
            {
                firstName: 'Dila',
                lastName: 'Vm',
                userRole: 'Admin',
                email: 'dila@gmail.com'
            }
        ];


        return (
            <Card className='userManage'>

                <CardHeader>
                    <h1>Manage Users</h1>
                </CardHeader>
                <CardBody>
                    <Row>
                        <Col className='filterName' sm={{span: 24}} md={{span: 8}}>
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

                        <Col className='filterName' sm={{span: 24}} md={{span: 8}}>
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

                        <Col className='filterName' sm={{span: 24}} md={{span: 8}}>
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
        )
    }
}

export default ManageUsers
