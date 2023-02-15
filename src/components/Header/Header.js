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
    NavbarText, Button,
} from 'reactstrap';
import './Header.scss'
import * as Icon from "react-feather";


function Header(args) {
    const [isOpen, setIsOpen] = useState(false);
    const [screenSize, setScreenSize] = useState(window.innerWidth);

    const toggle = () => setIsOpen(!isOpen);
    console.log(isOpen)
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
                            <Button className='btn-login' outline>
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
                                <Button className='mobile-login-btn' outline>
                                    Log in
                                </Button>
                                <Button outline className='mobile-login-btn'>Get Started</Button>
                            </div>
                        </ul>
                    </div>

                </div>}

            </Navbar>

        </div>
    );
}

export default Header;

