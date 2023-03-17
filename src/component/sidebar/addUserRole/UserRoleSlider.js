import React from "react";
import Sidebar from "../../../@core/components/sidebar";
import {Col, Input, Row} from "antd";
import {Button, CardBody, Label} from "reactstrap";
import InputPasswordToggle from "../../../@core/components/input-password-toggle";
import '../sidebarStyles.scss'
import {UserPlus} from "react-feather";
import {customSweetAlert, customSweetAlertResolve, customToastMsg} from "../../../utility/Utils";
import {AreYouSureToAddNewUserRole, AreYouSureToUpdateUserRole} from "../../../constatnts/constants";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content"
import ConfirmTextModal from "../../modal/confirmTextModal/ConfirmTextModal";

export const MySwal = withReactContent(Swal)

class UserRoleSlider extends React.Component {

    state = {
        useRoleName: '',
        confirmText: '',
        openView: false
    }

    handleInput = (event) => {
        let {name, value} = event.target;
        this.setState({[name]: value});
    };

    addUserRole = () => {

    };

    isUpdate = (val) => {
        if (val) {
            this.setState({openView: false})
        }
    };

    updateUserRole = () => {
        let roleName = this.state.useRoleName;
        if (roleName.trim() === '') {
            customToastMsg(
                'Role Name Cannot be empty!',
                0
            )
        } else {
            this.setState({openView: true});
        }
    }
    l

    render() {
        let {open, toggleSidebar, type, useRoleName} = this.props;
        let {openView} = this.state
        return <Sidebar
            size='lg'
            open={open}
            title={type === 'ADD' ? 'Add New User Role' : 'Update User Role'}
            headerClassName='mb-1'
            contentClassName='pt-0'
            toggleSidebar={toggleSidebar}
        >
            {type === 'ADD' ?
                <div><Row>


                    <Col className='update-user-wrapper' xs={{span: 24}} sm={{span: 24}} md={{span: 24}}>
                        <p className="about-userRole">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus maiores quia quisquam!
                            Aspernatur cum, dignissimos distinctio eligendi ipsum iusto maxime neque perferendis
                            recusandae sunt tempora unde vitae voluptatibus. Repellendus, ut!
                        </p>
                    </Col>


                    <Col className='update-user-wrapper' xs={{span: 24}} sm={{span: 24}} md={{span: 24}}>
                        <Label for="txtUserName">
                            User Role Name
                        </Label>
                        <Input
                            id="txtUseRoleName"
                            value={useRoleName}
                            onChange={(e) => this.handleInput(e)}
                            name="useRoleName"
                            placeholder="user role name"
                            type="text"
                        />
                    </Col>
                </Row>

                    <Row className='d-flex justify-content-end'>
                        <Col className='w-100  btn-update-wrapper' xs={{span: 24}} sm={{span: 24}} md={{span: 24}}>
                            <Button onClick={() => this.addUserRole()} className='w-100 btn-common' color="primary">
                                <UserPlus size={18} color='#fff'/> Add User Role
                            </Button>
                        </Col>
                    </Row>
                </div> :
                <div>

                    <Row>


                        <Col className='update-user-wrapper' xs={{span: 24}} sm={{span: 24}} md={{span: 24}}>
                            <p className="about-userRole">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus maiores quia
                                quisquam!
                                Aspernatur cum, dignissimos distinctio eligendi ipsum iusto maxime neque perferendis
                                recusandae sunt tempora unde vitae voluptatibus. Repellendus, ut!
                            </p>
                        </Col>


                        <Col className='update-user-wrapper' xs={{span: 24}} sm={{span: 24}} md={{span: 24}}>
                            <Label for="txtUserName">
                                Update User Role Name
                            </Label>
                            <Input
                                id="txtUpdateUseRoleName"
                                value={useRoleName}
                                onChange={(e) => this.handleInput(e)}
                                name="useRoleName"
                                placeholder="update user role name"
                                type="text"
                            />
                        </Col>
                    </Row>

                    <Row className='d-flex justify-content-end'>
                        <Col className='w-100  btn-update-wrapper' xs={{span: 24}} sm={{span: 24}} md={{span: 24}}>
                            <Button onClick={() => this.updateUserRole()} className='w-100 btn-common' color="primary">
                                <UserPlus size={18} color='#fff'/> Update User Role
                            </Button>
                        </Col>
                    </Row>
                </div>
            }


            <ConfirmTextModal
                isOpen={openView}
                closeModal={async () => {
                    await this.setState({openView: false})
                }}
                confirmMsg={(e) => this.isUpdate(e)}
                msg={<small>If you want to update this user role name, Please write ' <i><b>Yes! Update this</b></i> ' in
                    the text field</small>}
            />
        </Sidebar>
    }

}

export default UserRoleSlider;