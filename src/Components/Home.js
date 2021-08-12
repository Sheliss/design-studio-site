import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import WorksList from './WorksList';

export default function Home() {
    return(
            <section className="home__section">
                <Container fluid="xl" className="intro__container">
                    <Row className="justify-content-center">
                        <Col className="col-6">
                            <h1 className="intro__title">UI/UX & Graphic Designer</h1>
                            <h2 className="intro__subtitle">
                            I am a Graphic & Web Designer based in New York, specializing 
                            in User Interface Design and Development.
                            </h2>
                        </Col>
                    </Row>
                </Container>
                <WorksList />
            </section>
    )
}