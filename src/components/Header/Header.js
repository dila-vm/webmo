import React, {useState} from 'react';
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


function Header(args) {
    const [isOpen, setIsOpen] = useState(false);
    const [open, setOpen] = useState(false);
    const [screenSize, setScreenSize] = useState(window.innerWidth);

    const toggle = () => setIsOpen(!isOpen);

    const openLogin = () => setOpen(!open);

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

                        <div className="d-flex flex-row login-btn-wrapper">
                            <Button onClick={openLogin} className='btn-login' outline>
                                Log in
                            </Button>
                            <Button className='btn-get-started'>Get Started</Button>
                        </div>
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

                            <div className="d-flex flex-column align-items-center justify-content-center">
                                <Button onClick={openLogin} className='mobile-login-btn' outline>
                                    Log in
                                </Button>
                                <Button outline className='mobile-login-btn'>Get Started</Button>
                            </div>
                        </ul>
                    </div>

                </div>}

            </Navbar>


            {open ?
                <Modal className='login-modal' centered isOpen={open} toggle={() => setOpen(!open)}>
                    <ModalHeader toggle={() => setOpen(!open)}/>
                    <ModalBody>


                        <div className="login-form ">

                            <h1 className='text-center lbl-login'>Login</h1>

                            <FormGroup>
                                <Label for="exampleEmail">
                                    User Name
                                </Label>
                                <Input
                                    autoComplete={false}
                                    id="exampleEmail"
                                    name="username"
                                    placeholder="user name"
                                    type="text"
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
                                />
                            </FormGroup>

                            <FormGroup className='d-flex justify-content-center'>
                                <Button className='btn-common login-btn'>
                                    Login
                                </Button>
                            </FormGroup>
                        </div>
                    </ModalBody>
                </Modal> : null}
        </div>
    );
}

export default Header;

