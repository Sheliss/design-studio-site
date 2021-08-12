import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Footer() {
    return (
        <footer className="footer">
            <Container fluid="xl">
            <Row className="footer__row">
                <Col className="col-3">
                    <div className="footer__title">Piroll Design, Inc.</div>
                    <div className="footer__subtitle">
                    © 2017 Piroll. All rights reserved.<br/>
                    Designed by robirurk.
                    </div>
                </Col>
                <Col className="col-2 offset-2">
                    <div className="footer__contact">
                        hello@pirolltheme.com
                    </div>
                    <div className="footer__contact">
                        +44 987 065 908
                    </div>
                </Col>
                <Col className="col-1 offset-1">
                    <a href="/" className="footer__link">Projects</a>
                    <a href="/" className="footer__link">About</a>
                    <a href="/" className="footer__link">Services</a>
                    <a href="/" className="footer__link">Carreer</a>
                </Col>
                <Col className="col-1">
                    <a href="/" className="footer__link">News</a>
                    <a href="/" className="footer__link">Events</a>
                    <a href="/" className="footer__link">Contact</a>
                    <a href="/" className="footer__link">Legals</a>
                </Col>
                <Col className="col-1 offset-1">
                    <a href="/" className="footer__link">Facebook</a>
                    <a href="/" className="footer__link">Twitter</a>
                    <a href="/" className="footer__link">Instagram</a>
                    <a href="/" className="footer__link">Dribbble</a>
                </Col>
            </Row>
            </Container>
        </footer>
    )
}