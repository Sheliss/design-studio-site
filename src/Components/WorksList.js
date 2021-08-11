import React, { useEffect, useState } from 'react';
import {Container, Row, Col, Image, Spinner} from 'react-bootstrap';


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
        <Col xs={3} key={index} className="g-0 worksGrid_container">
            <Image src={img} alt={alt} className="img-fluid worksGrid__image"></Image>
        </Col>
        )
    }

    const retrivedWorks = loading || data === [] ? (
        <Row className="justify-content-center">
            <Spinner animation="border"></Spinner>
        </Row>
    ) : (
        <Row className="row-cols-4">
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