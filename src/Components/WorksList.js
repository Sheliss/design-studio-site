import React, { useEffect, useState } from 'react';
import {Container, Row, Col, Image, Spinner} from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default function WorksList() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => { 
        setLoading(true)
        callWorksList()
            .then(res => setData(res))
            .then(setLoading(false))
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
            
        <Col as={Link} to={`work/${alt}`} key={index} className="g-0 worksGrid_container scale-in-center">
            <Image src={img} alt={alt} className="img-fluid worksGrid__image"></Image>
            <span class="pe-7s-look works__look"></span>
        </Col>
        )
    }

    const retrivedWorks = loading || data === [] ? (
        <Row className="justify-content-center">
            <Spinner animation="border works__spinner"></Spinner>
        </Row>
    ) : (
        <Row className="row-cols-lg-4 row-cols-3">
            {Object.keys(data).map((key, index) => (
                workCard(data[key], index)
            ))}
        </Row>
    )

    return(
        <Container fluid>
           {retrivedWorks}
        </Container>
    ) 
}