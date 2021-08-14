import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Spinner} from 'react-bootstrap';
import { Route } from 'react-router-dom';

export default function Work({ match }) {

    const [workData, setWorkData] = useState({});
    

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


    const currentWork = (data) => {
        const links = data.share;

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
                    <Col className="col-5 offset-1 work__infoGroup">
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
                </Row>
            </Container>
        )
    }


    return(
        <section className="work__section">
            {currentWork(workData)}
        </section>
    )
}