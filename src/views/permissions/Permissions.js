import {Card, CardHeader, CardBody, CardTitle, CardText, CardLink, Label, Button} from 'reactstrap'
import React from "react"
import {Col, Row, Select, Checkbox} from "antd"
import './permission.scss'
import {userActive, userRoles} from "../../constatnts/DropdownValues"
import {debounce} from '../../utility/CommonFun'
import UserUpdate from "../../component/sidebar/userUpdate/UserUpdate";
import {UserPlus} from "react-feather";

class Permission extends React.Component {

    state = {
        userName: '',
        isOpen: false,
        selectedPermissions: null
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

    onChange = (checkedValues) => {
        console.log('checked = ', checkedValues);
        this.setState({selectedPermissions: checkedValues});
    };

    render() {
        let permission = [
            {name: 'Manage Users', value: false},
            {name: 'Manage Content', value: false},
            {name: 'Manage Product', value: false},
            {name: 'Manage Orders', value: false},
            {name: 'Manage Analytics', value: false},
            {name: 'Manage Settings', value: false},
            {name: 'Manage Security', value: false},
            {name: 'Manage Marketing', value: false},
            {name: 'Manage Support', value: false},
            {name: 'Manage Integrations', value: false},
        ];


        let {isOpen, checkedValues} = this.state;
        return (
            <div>
                <Card className='userManage'>

                    <CardHeader>
                        <Row className='w-100'>
                            <Col xs={{span: 24}} sm={{span: 24}} md={{span: 21}} lg={{span: 21}}>
                                <h1>Manage Permissions</h1>

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

                        </Row>


                        <div className="permission-wrapper">
                            <Checkbox.Group style={{width: '100%'}} onChange={(e) => this.onChange(e)}>
                                <Row className='w-100'>
                                    {permission.map((p, index) => <Col key={index + p.name + '_'} span={6}>
                                        <Checkbox className='chk-bx-wrapper' value={p.name}>{p.name}</Checkbox>
                                    </Col>)}
                                </Row>
                            </Checkbox.Group>
                        </div>

                        <Row className='d-flex justify-content-end mt-3'>
                            <Col xs={{span: 24}} md={{span: 4}} lg={{span: 4}}>
                                <Button className='w-100 btn-common' color="primary">
                                    <UserPlus size={18} color='#fff'/> Save Permissions
                                </Button>
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

export default Permission
