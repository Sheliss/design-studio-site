import React from 'react';
import { Container, Nav, Navbar, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SiteLogo from '../assets/logo.png'

export default function Header() {
    return(
        <Navbar collapseOnSelect expand="lg">
            <Container fluid="xl">
                <Navbar.Brand href="/">
                    <Image src={SiteLogo} alt="Piroll logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-lg-end">
                    <Nav className="nav__custom">
                        <Nav.Link as={Link} to="/" className="nav__btn">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about" className="nav__btn">About</Nav.Link>
                        <Nav.Link as={Link} href="/" className="nav__btn">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}