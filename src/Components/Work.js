import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Spinner, Image} from 'react-bootstrap';
import { Route } from 'react-router-dom';

export default function Work({ match }) {

    const [workData, setWorkData] = useState({});
    const [showPopup, setPopup] = useState(false);
    

    useEffect(() => {
        fetchWork()
            .then(res => setWorkData(res))
    }, []);

    const fetchWork = async () => {
        const fetchWork = await fetch(`/work/?id=${match.params.id}`);
        
        const work = await fetchWork.json();
        
        return work;
    }

    const shareLink = (info, index) => {
        const name = info.name.charAt(0).toUpperCase() + info.name.slice(1);
        const link = info.link;

        return (
            <a href={link} key={index} className="work__shareLink">{name}</a>
        )
    }


    const handlePopup = (e) => {
        e.stopPropagation();
        setPopup(!showPopup);
    }


    const currentWork = (data) => {
        const links = data.share;
        const image = __dirname + data.img;

        return Object.keys(data).length === 0 && data.constructor === Object ? (
            <Container>
                <Row>
                    <Col className="d-flex justify-content-center">  
                        <Spinner animation="border works__spinner"></Spinner>
                    </Col>
                </Row>
            </Container>
        ) : (
            
            <Container fluid>
                <Row>
                    <Col className="offset-1 col-4 work__infoGroup">
                        <div className="work__title">
                            {data.name}
                        </div>
                        <div className="work__text">
                            {data.desc}
                        </div>
                        <div className="work__text work__text__line">
                            <span>Client: </span>{data.customer}
                        </div>
                        <div className="work__text work__text__line">
                            <span>Date: </span>{data.date}
                        </div>
                        <div className="work__text work__text__line">
                            <span>Share: </span>
                            { 
                                Object.keys(links).map((key, index) => (
                                    shareLink(links[key], index)
                                ))
                            }
                        </div>
                    </Col>
                    <Col className="offset-1 work__image__container g-0" onClick={(e) => {handlePopup(e)}}>
                        <Image src={image} alt={data.title} className="work__image img-fluid"></Image>
                        <span class="pe-7s-search work__image__look"></span>
                    </Col>
                </Row>
                {showPopup && <div className="work__popup__container">
                    <Container fluid className="g-0">
                        <Row className=" g-0 justify-content-center">
                            <Col className="work__popup__image align-self-center col-8">
                                <Image src={image} alt={`popup ${data.title}`} className="img-fluid"></Image>
                                <span className="pe-7s-close work__popup__close" onClick={(e) => {handlePopup(e)}}></span>
                            </Col>
                        </Row>
                    </Container>
                </div>}
                {showPopup && <div className="work__popup__bg" onClick={(e) => {handlePopup(e)}}></div>}
            </Container>

        )
    }


    return(
        <section className="work__section">
            {currentWork(workData)}
        </section>
    )
}