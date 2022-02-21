import React from 'react';
import { Link } from 'react-scroll';
import logo_white_trasparente from '../../images/logo_white_trasparente.png';

import { Nav, Navbar, Container, NavDropdown, Button, FormControl, Form } from 'react-bootstrap'
import ScrollTo from "react-scroll-into-view";

import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
    return (
        <Navbar bg="none" expand="lg">
            <Container>
                <Navbar.Brand href="#" className="logo-header"><img src={logo_white_trasparente}></img></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-12 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                        <ScrollTo selector={`#description_home`}>
                        <a href="javascript:void(0)">
                            Sobre
                        </a>
                        </ScrollTo> 
                        <ScrollTo selector={`#git_projects`}>
                        <a href="javascript:void(0)">
                            Projetos
                        </a>
                        </ScrollTo> 
                        <ScrollTo selector={`#contact`}>
                        <a href="javascript:void(0)">
                            Contato
                        </a>
                        </ScrollTo> 
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
