import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { Map, Marker } from "pigeon-maps"

export default function Contact() {
    const markerColor = '#21bfb9';

    return (
        <div className="page fade-in">
        <section className="contact__section">
            <Container fluid="xl">
                <Row className="contact__row">
                    <Col className="col-12 col-md-5 col-lg-4">
                        <div className="contact__title">Contact Info:</div>
                        <div className="contact__text">
                            To give give beginning divide, cattle. Give moving 
                            won't, there the abundantly she'd she'd brought air 
                            upon. Light hath subdue. Life days creature upon 
                            first heaven gathering dry.
                        </div>
                        <div className="contact__text contact__text__line">
                            <span>Address: </span>10111 Santa Monica Boulevard, LA
                        </div>
                        <div className="contact__text contact__text__line">
                            <span>Phone: </span>+44 987 065 908
                        </div>
                        <div className="contact__text contact__text__line">
                            <span>Email: </span>info@Example.com
                        </div>
                        <div className="contact__text contact__text__line">
                            <span>Fax: </span>+44 987 065 909
                        </div>
                    </Col>
                    <Col className="col-12 col-md-6 col-lg-7 offset-md-1">
                        <Form>
                            <Row className="contact__form__row">
                                <Col>
                                    <input type="text" className="form-control contact__form__text" placeholder="Your Name"></input>
                                </Col>
                                <Col>
                                    <input type="email" className="form-control contact__form__text" placeholder="Your Email"></input>
                                </Col>
                            </Row>
                            <Row className="contact__form__row">
                                <Col>
                                    <input type="text" className="form-control contact__form__text" placeholder="Your Title"></input>
                                </Col>
                            </Row>
                            <Row className="contact__form__row">
                                <Col>
                                    <textarea className="form-control contact__form__text" placeholder="Your Comment" rows="5"></textarea>
                                </Col>
                            </Row>
                            <Row className="contact__form__row">
                                <Col>
                                    <button type="submit" className="btn btn-primary contact__submitBtn">Send Message</button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
        <section className="contact__map">
            <Container fluid>
                <Row>
                    <Col className="g-0 contact__map__container">
                        <Map height={300} defaultCenter={[29.608650, -95.229810]} defaultZoom={15}>
                            <Marker width={30} color={markerColor} anchor={[29.608650, -95.229810]} />
                        </Map>
                    </Col>
                </Row>
            </Container>
        </section>
        </div>
    )
}