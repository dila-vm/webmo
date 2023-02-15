import React, {useEffect, useState} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Col,
    CardTitle,
    CardText,
    Form,
    FormGroup,
    Label,
    Input,
} from 'reactstrap';
import './Header.scss'
import * as Icon from "react-feather";
import {RegisterUser} from "../../service/UserService";
import axios from "axios";
import {BASE_URL} from "../../service/ApiConfig";
import {ACCESS_TOKEN} from "../../constants/constant";
import {customToastMsg} from "../../util/commonFun";
import toastr from "toastr";
import 'react-toastify/dist/ReactToastify.css';

function Header(args) {
    const [isOpen, setIsOpen] = useState(false);
    const [open, setOpen] = useState(false);
    const [modalType, setModalType] = useState('');
    const [screenSize, setScreenSize] = useState(window.innerWidth);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogged, setIsLogged] = useState('');


    const [name, setName] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    const toggle = () => setIsOpen(!isOpen);

    useEffect(() => {
        setIsLogged(localStorage.getItem(ACCESS_TOKEN))
    }, []);

    const openModal = (type) => {
        setModalType(type);
        setOpen(!open)
    };

    const onChangeText = (event) => {
        let {name, value} = event.target;
        if (name === 'email') {
            setEmail(value);
        } else {
            setPassword(value);
        }
    };

    const login = async () => {
        // let data = {
        //     first_name: 'Dilanajana1',
        //     email: 'dila148@gmail.com',
        //     password: '11111111',
        //     password_confirmation: '11111111'
        // };
        axios.post(BASE_URL + `/user/login?email=${email}&password=${password}`)
            .then(res => {
                console.log(res.data.data);
                if (res.status === 200) {
                    setEmail('');
                    setPassword('');
                    localStorage.setItem(ACCESS_TOKEN, res.data.data.token);
                    localStorage.setItem('user_name', res.data.data.user.first_name);
                    setOpen(false);
                    window.location.href = '/'
                }
            })
    };

    const validateUser = () => {
        customToastMsg('test')
        console.log(name, email, password, repeatPassword);
        let data = {
            first_name: name,
            email: email,
            password: password,
            password_confirmation: repeatPassword
        };

        if (name.trim() === '') {
            alert('User name cannot be empty!');
        } else if (email.trim() === '') {
            alert('Email cannot be empty!')
        } else if (password.trim() === '') {
            alert('Password cannot be empty!')
        } else if (password.trim() !== repeatPassword.trim()) {
            alert('Password does not match')
        } else {
            axios.post(BASE_URL + `/user/register?first_name=${name}&email=${email}&password=${password}&password_confirmation=${repeatPassword}`)
                .then(res => {
                    console.log(res.data.data);
                    if (res.status === 200) {
                        setName('');
                        setEmail('');
                        setPassword('');
                        setRepeatPassword('')
                        setModalType('LOGIN');

                    } else {
                        console.log(res)
                    }
                })
        }

    };


    return (
        <div className='header-bar'>
            <Navbar>

                {screenSize < 769 ?
                    <div className='mobile-nav-btn'>
                        <NavbarBrand href="/">LOGO</NavbarBrand>
                        <span className="hamBun-btn">
                            {isOpen ? <Icon.X onClick={toggle}/> : <Icon.Menu onClick={toggle}/>}
                       </span>
                    </div> :
                    <div className=' w-100 d-flex flex-row justify-content-between web-view-nav '>
                        <NavbarBrand className='logo-name' href="/">LOGO</NavbarBrand>

                        <Nav className="d-flex flex-row justify-content-between" navbar>
                            <NavItem className='nav-bar-item'>
                                <NavLink href="/components/">How Its Work</NavLink>
                            </NavItem>

                            <UncontrolledDropdown className='nav-bar-item' nav inNavbar>
                                <DropdownToggle nav caret>
                                    Services
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>Option 1</DropdownItem>
                                    <DropdownItem>Option 2</DropdownItem>
                                    <DropdownItem divider/>
                                    <DropdownItem>Reset</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>

                            <NavItem className='nav-bar-item'>
                                <NavLink href="https://github.com/reactstrap/reactstrap">
                                    Review
                                </NavLink>
                            </NavItem>

                            <NavItem className='nav-bar-item'>
                                <NavLink href="https://github.com/reactstrap/reactstrap">
                                    FAQs
                                </NavLink>
                            </NavItem>

                            <NavItem className='nav-bar-item'>
                                <NavLink href="https://github.com/reactstrap/reactstrap">
                                    Contacts
                                </NavLink>
                            </NavItem>
                        </Nav>

                        {isLogged === null && <div className="d-flex flex-row login-btn-wrapper">
                            <Button onClick={() => openModal('LOGIN')} className='btn-login' outline>
                                Log in
                            </Button>
                            <Button onClick={() => openModal('REGISTER')} className='btn-get-started'>Get
                                Started</Button>
                        </div>}
                    </div>

                }

                {isOpen && <div className={isOpen ? 'mobile-nav open-animation' : 'mobile-nav close-nav'}>

                    <div className="navigation-wrapper">
                        <ul>
                            <li><h1>LOGO</h1></li>
                            <li>How it work</li>
                            <li>Services</li>
                            <li>Reviews</li>
                            <li>FAQs</li>
                            <li>Contacts</li>

                            {isLogged && <div className="d-flex flex-column align-items-center justify-content-center">
                                <Button onClick={() => openModal('LOGIN')} className='mobile-login-btn' outline>
                                    Log in
                                </Button>
                                <Button onClick={() => openModal('REGISTER')} outline className='mobile-login-btn'>Get
                                    Started</Button>
                            </div>}
                        </ul>
                    </div>

                </div>}

            </Navbar>


            {open ?
                <Modal className='login-modal' centered isOpen={open} toggle={() => setOpen(!open)}>
                    <ModalHeader toggle={() => setOpen(!open)}/>
                    <ModalBody>

                        <div className="login-form ">

                            <h1 className='text-center lbl-login'>{modalType === 'LOGIN' ? 'Login' : 'Get Start'}</h1>
                            {modalType === 'LOGIN' ?
                                <div>
                                    <FormGroup>
                                        <Label for="exampleEmail">
                                            Email
                                        </Label>
                                        <Input
                                            autoComplete={false}
                                            id="exampleEmail"
                                            name="email"
                                            placeholder="email"
                                            type="email"
                                            onChange={onChangeText}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="examplePassword">
                                            Password
                                        </Label>
                                        <Input
                                            id="examplePassword"
                                            name="password"
                                            placeholder="password"
                                            type="password"
                                            onChange={onChangeText}
                                        />
                                    </FormGroup>
                                    <FormGroup className='d-flex justify-content-center'>
                                        <Button onClick={login} className='btn-common login-btn'>
                                            Login
                                        </Button>
                                    </FormGroup>
                                </div> :
                                <div>
                                    <FormGroup>
                                        <Label for="exampleEmail">
                                            User Name
                                        </Label>
                                        <Input
                                            autoComplete={false}
                                            id="userName"
                                            name="userName"
                                            placeholder="user name"
                                            type="text"
                                            onChange={(event) => setName(event.target.value)}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label>
                                            Email
                                        </Label>
                                        <Input
                                            autoComplete={false}
                                            id="email"
                                            name="email"
                                            placeholder="email"
                                            type="email"
                                            onChange={(event) => setEmail(event.target.value)}
                                        />
                                    </FormGroup>

                                    <FormGroup>
                                        <Label>
                                            Password
                                        </Label>
                                        <Input
                                            autoComplete={false}
                                            id="password"
                                            name="password"
                                            placeholder="password"
                                            type="password"
                                            onChange={(event) => setPassword(event.target.value)}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label>
                                            Repeat Password
                                        </Label>
                                        <Input
                                            autoComplete={false}
                                            id="repeatPassword"
                                            name="repeatPassword"
                                            placeholder="repeat password"
                                            type="password"
                                            onChange={(event) => setRepeatPassword(event.target.value)}
                                        />
                                    </FormGroup>

                                    <Button onClick={validateUser}> Register Now</Button>
                                </div>}
                        </div>
                    </ModalBody>
                </Modal> : null}
        </div>
    );
}

export default Header;

