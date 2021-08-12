import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Photo from '../assets/photo.jpg';

export default function About() {


    
    return(
        <div>
            <section className="about__introSection">
                <Container fluid="xl">
                    <Row className="justify-content-center about__intro">
                        <Col className="col-6">
                            <div className="about__introTitle">Amelia Woods</div>
                            <div className="about__introSubtitle">
                                I am a Graphic & Web Designer based in New York, specializing 
                                in User Interface Design and Development.
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="about__numbersSection">
                <Container fluid="xl">
                    <Row className="about__numbers">
                        <Col className="col-1 d-flex align-items-center">
                            <span className="pe-7s-portfolio about__numbers__icon"></span>
                        </Col>
                        <Col className="col-2">
                            <div className="about__numbersGroup__number">548</div>
                            <div className="about__numbersGroup__text">projects completed</div>
                        </Col>
                        <Col className="col-1 d-flex align-items-center">
                            <span className="pe-7s-clock about__numbers__icon"></span>
                        </Col>
                        <Col className="col-2">
                            <div className="about__numbersGroup__number">1465</div>
                            <div className="about__numbersGroup__text">WORKING HOURS</div>
                        </Col>
                        <Col className="col-1 d-flex align-items-center">
                            <span className="pe-7s-star about__numbers__icon"></span>
                        </Col>
                        <Col className="col-2">
                            <div className="about__numbersGroup__number">612</div>
                            <div className="about__numbersGroup__text">POSITIVE FEEDBACKS</div>
                        </Col>
                        <Col className="col-1 d-flex align-items-center">
                            <span className="pe-7s-like about__numbers__icon"></span>
                        </Col>
                        <Col className="col-2">
                            <div className="about__numbersGroup__number">735</div>
                            <div className="about__numbersGroup__text">HAPPY CLIENTS</div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="about__aboutMeSection">
                <Container fluid>
                    <Row className="about__aboutMe">
                        <Col className="col-6 g-0 about__aboutMe__photoContainer">
                            <Image src={Photo} fluid className="about__aboutMe__photo"></Image>
                        </Col>
                        <Col className="col-4 offset-1 about__aboutMe__container">
                            <div className="about__aboutMe__title">
                                About me
                            </div>
                            <div className="about__aboutME__text">
                                Given let waters air sea had you'll, may seed abundantly fish. 
                                Were, you'll earth forth winged above brought. Own darkness 
                                they're him can't fourth sea place have.
                                <br/>
                                <br/>
                                So the above May stars cattle fruitful face shall. Tree it, winged. 
                                Every signs male firmament us. Morning him.
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="about__contactSection">
                <Container fluid="xl">
                    <Row className="justify-content-center">
                        <Col className="col-6 about__contact__container d-flex justify-content-center flex-column">
                            <div className="about__contact__title">Need a Project?</div>
                            <div className="about__contact__text">
                                Let us know what you're looking for in an agency. We'll take a look and see 
                                if this could be the start of something beautiful.
                            </div>
                            <button className="about__contact__button align-self-center">let’s talk</button>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}