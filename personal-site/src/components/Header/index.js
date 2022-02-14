import React from 'react';
import { Link } from 'react-router-dom';
import logo_white_trasparente from '../../images/logo_white_trasparente.png';

import { Nav, Navbar, Container, NavDropdown, Button, FormControl, Form } from 'react-bootstrap'

import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
    return (
        <Navbar bg="none" expand="lg">
            <Container>
                <Navbar.Brand href="#" className="logo-header"><img src={logo_white_trasparente}></img></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-12 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">Sobre</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}


const Header = () => {
    return (
        <header>
            <NavBar />
        </header>
    );
}

export default Header;
