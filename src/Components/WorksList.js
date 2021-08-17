import React, { useEffect, useState } from 'react';
import {Container, Row, Col, Image, Spinner} from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default function WorksList() {
    const [data, setData] = useState([]);

    useEffect(() => { 
        callWorksList()
            .then(res => setData(res))
    }, [])

    const callWorksList = async () => {
        const response = await fetch('/works-list');

        const body = await response.json();
        
        return body;
    }

    const workCard = (card, index) => {
        const img = card.img;
        const alt = card.id;
        
        return (
            
        <Col as={Link} to={`work/${alt}`} key={index} className="g-0 worksGrid_container fade-in">
            <Image src={img} alt={alt} className="img-fluid worksGrid__image"></Image>
            <span className="pe-7s-look works__look"></span>
        </Col>
        )
    }

    const retrivedWorks = (data) => {
        return data.length === 0 ? (
        <Row className="justify-content-center">
            <Spinner animation="border works__spinner"></Spinner>
        </Row>
    ) : (
        <Row className="row-cols-lg-4 row-cols-md-3 row-cols-2">
            {Object.keys(data).map((key, index) => (
                workCard(data[key], index)
            ))}
        </Row>
    )}

    return(
        <Container fluid>
           {retrivedWorks(data)}
        </Container>
    ) 
}