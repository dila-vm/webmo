import {Card, CardHeader, CardBody, CardTitle, CardText, CardLink, Label, Button} from 'reactstrap'
import React from "react"
import {Col, Divider, Input, Row, Select, Table} from "antd"
import './service.scss'
import {userActive, userRoles} from "../../constatnts/DropdownValues"
import {packageDetailsColumns, serviceDetailsColumns, userRoleDetailsColumns} from "../../constatnts/TabeleColumDetails"
import DataTable, {ExpanderComponentProps} from "react-data-table-component"
import {Award, ChevronDown, PlusCircle, UserPlus} from "react-feather"
import {debounce} from '../../utility/CommonFun'
import UserUpdate from "../../component/sidebar/userUpdate/UserUpdate";
import {customToastMsg} from "../../utility/Utils";
import ServiceSlide from "../../component/sidebar/serviceSlide/serviceSlide";

const ExpandedComponent = ({data}) => <div>

    {data?.questions && <div>
        <h3 className='q-topic'>Questions and answer for selected service</h3>

        {data?.questions.map((q, index) => <Card key={index + 'q'} className='q-card-view'> <CardHeader>
                <b>{index + 1}Q: {q.question}</b>
            </CardHeader>
                <CardBody>
                    <p><b>A:</b> {q.answer}</p>
                </CardBody>
            </Card>
        )}
    </div>}

</div>;


class ServiceManagement extends React.Component {

    state = {
        userName: '',
        isOpen: false,
        type:''
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
                serviceName: 'Service Name 01',
                qCount: '3',
                items: 'item 01 , item 02',
                status: 'INACTIVE',
                questions: [
                    {
                        question: 'Creating yet another React table library came out of necessity while developing a web application for a growing startup?',
                        answer: 'Creating yet another React table library came out of necessity while developing a web application for a growing startup. I discovered that while there are some great table libraries out there, some required heavy customization, were missing out of the box features such as built in sorting and pagination, or required understanding the atomic structure of html tables.\n' +
                            '\n' +
                            'If you want to achieve balance with the force and want a simple but flexible table library give React Data Table Component a chance.'
                    }, {
                        question: 'If you would like to support the project financially?',
                        answer: 'expandableComponentProps allows you to pass additional props to your expander component and prevents TypeScript from complaining: le Component a chance.'
                    },
                ],
                action: <div>
                    <Button outline className='mr-1' color='warning'
                            onClick={() => this.setState({isOpen: true,type:'UPDATE'})}> Update </Button>
                    <Button
                        onClick={(e) => customToastMsg('temp', 0, 'lorem tem msglorem tem msglorem tem msglorem tem msg!')}
                        outline color='danger'> Delete </Button>
                </div>
            }, {
                id: '2',
                packageName: 'package Name 02',
                price: '120.00',
                type: 'corporate',
                count: '56',
                discount: '56%',
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
                                <h1>Manage Services</h1>

                            </Col>

                            <Col xs={{span: 24}} sm={{span: 24}} md={{span: 2}} lg={{span: 3}}>
                                <Button  onClick={() => this.setState({isOpen: true,type:'ADD'})} className='w-100 btn-common' color="primary">
                                    <PlusCircle size={18} color='#fff'/> Add Service
                                </Button>
                            </Col>
                        </Row>
                    </CardHeader>
                    <CardBody>
                        <Row className='w-100'>

                            <Col className='filterName w-100' sm={{span: 24}} md={{span: 6}}>
                                <Label for="txtRoleName">
                                    Service Name
                                </Label>
                                <Input
                                    className='w-100'
                                    id="txtUserName"
                                    name="userName"
                                    onChange={(e) => this.handleInput(e)}
                                    placeholder="search by service name"
                                    type="text"
                                />


                            </Col>


                            <Col className='filterName w-100' sm={{span: 24}} md={{span: 6}}>
                                <Label for="txtRoleName">
                                    Service Status
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
                                    expandableRows
                                    border={true}
                                    noHeader
                                    pagination={true}
                                    paginationServer
                                    subHeader={false}
                                    columns={serviceDetailsColumns}
                                    subHeaderWrap
                                    responsive={true}
                                    sortIcon={<ChevronDown/>}
                                    className='react-dataTable pb-2'
                                    defaultSortField='invoiceId'
                                    data={details}
                                    expandableRows
                                    expandableRowsComponent={<ExpandedComponent/>}
                                />
                            </Col>
                        </Row>

                    </CardBody>
                </Card>

                <ServiceSlide
                    toggleSidebar={() => {
                        this.setState({isOpen: false})
                    }}
                    type={type}
                    open={isOpen}/>
            </div>
        )
    }
}

export default ServiceManagement
