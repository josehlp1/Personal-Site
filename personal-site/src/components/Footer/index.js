import React from 'react';
import { Link } from 'react-router-dom';
import logo_white_trasparente from '../../images/logo_white_trasparente.png';

import { Nav, Navbar, Container, NavDropdown, Button, FormControl, Form } from 'react-bootstrap'

import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const atualDate = new Date()

const Footer = () => {

    return (
        <footer className="container">
            <p>© {atualDate.getFullYear()} | @PelletJose</p>
        </footer>
    );
}

export default Footer;
