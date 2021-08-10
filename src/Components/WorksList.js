import React, { useEffect, useState } from 'react';
import {Container, Row, Col, Image, Spinner} from 'react-bootstrap';


export default function WorksList() {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => { 
        callWorksList()
            .then(res => setData(res))
            .then(setLoading(false));
    }, [])

    const callWorksList = async () => {
        const response = await fetch('/works-list');

        const body = await response.json();
        
        return body;
    }



    const retrivedWorks = loading ? (
        <Row className="justify-content-center">
            <Spinner animation="border"></Spinner>
        </Row>
    ) : (
        <Row className="row-cols-4">
            {data.map((work, index) => (
                <Col xs={3}>
                    <Image src={data[work].img}></Image>
                </Col>
            ))}
        </Row>
    )

    return(
        <Container fluid>
           {retrivedWorks}
        </Container>
    ) 
}