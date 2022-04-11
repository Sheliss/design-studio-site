import React, { useEffect } from 'react';
import {Container, Row, Col, Image, Spinner} from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { works_request, works_success } from '../Store/actions/worksList';


export default function WorksList() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(works_request());
        callWorksList()
            .then(res => dispatch(works_success(res)))
    }, [dispatch])

    const callWorksList = async () => {
        const response = await fetch('https://designer-studio-server.herokuapp.com/list');

        const body = await response.json();
        
        return body;
    }

    const workCard = (card, index) => {
        const img = 'https://designer-studio-server.herokuapp.com/' + card.img;
        const alt = card.id;
        
        return (  
        <Col as={Link} to={`/design-studio-site/work/${alt}`} key={index} className="g-0 worksGrid_container fade-in">
            <Image src={img} alt={alt} className="img-fluid worksGrid__image"></Image>
            <span className="pe-7s-look works__look"></span>
        </Col>
        )
    }

    const retrievedWorks = (data) => {
        return (
        <Row className="row-cols-lg-4 row-cols-md-3 row-cols-2">
            {Object.keys(data).map((key, index) => (
                workCard(data[key], index)
            ))}
        </Row>
    )}

    const worksLoading = () => {
        return(
            <Row className="justify-content-center">
                <Spinner animation="border works__spinner"></Spinner>
            </Row>
        )
    }

    const data = useSelector(state => state.worksList.data);
    const loading = useSelector(state => state.worksList.loading);

    return(
        <Container fluid>
            {loading ? (    
                worksLoading()
            ) : (
                retrievedWorks(data)
            )}
        </Container>
    ) 
}