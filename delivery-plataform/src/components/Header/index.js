import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';

import { Nav, Navbar, Container, NavDropdown, Button, FormControl, Form } from 'react-bootstrap'

import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#" className="logo-header"><img src={logo}></img></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">Sobre Nós</Nav.Link>
                    </Nav>
                    <div>
                        <button className="btn-login">Entrar</button>
                    </div>
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
