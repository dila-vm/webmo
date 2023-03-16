import {Card, CardHeader, CardBody, CardTitle, CardText, CardLink, Label, Button} from 'reactstrap'
import React from "react"
import {Col, Divider, Input, Row, Select, Table} from "antd"
import './subscriptions.scss'
import {userActive, userRoles} from "../../constatnts/DropdownValues"
import {
    packageDetailsColumns,
    subscriptionDetailsColumns,
    userRoleDetailsColumns
} from "../../constatnts/TabeleColumDetails"
import DataTable from "react-data-table-component"
import {Award, ChevronDown, PlusCircle, UserPlus} from "react-feather"
import {debounce} from '../../utility/CommonFun'
import UserUpdate from "../../component/sidebar/userUpdate/UserUpdate";
import {customToastMsg} from "../../utility/Utils";

class ManageSubscription extends React.Component {

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
                packageName: 'package Name 01',
                type: 'corporate',
                subscriber: 'Lily Fenando',
                status: 'INACTIVE',
                action: <div>
                    <Button outline className='mr-1' color='warning'
                    > Change Status </Button>
                    <Button outline className='mr-1' color='secondary'
                            onClick={() => this.setState({isOpen: true})}> View </Button>

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
                                <h1>Manage Subscriptions</h1>

                            </Col>

                        </Row>
                    </CardHeader>
                    <CardBody>
                        <Row className='w-100'>

                            <Col className='filterName w-100' sm={{span: 24}} md={{span: 6}}>
                                <Label for="txtRoleName">
                                    Subscriber's Name
                                </Label>
                                <Input
                                    className='w-100'
                                    id="txtUserName"
                                    name="userName"
                                    onChange={(e) => this.handleInput(e)}
                                    placeholder="search by subscriber"
                                    type="text"
                                />


                            </Col>

                            <Col className='filterName w-100' sm={{span: 24}} md={{span: 6}}>
                                <Label for="txtRoleName">
                                    Package Name
                                </Label>
                                <Select
                                    className='w-100'
                                    onChange={() => console.log()}
                                    placeholder='select package name'
                                    options={userRoles}
                                />

                            </Col>


                            <Col className='filterName w-100' sm={{span: 24}} md={{span: 6}}>
                                <Label for="txtRoleName">
                                    Status
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
                                    columns={subscriptionDetailsColumns}
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

export default ManageSubscription
