import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Spinner, Image} from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { work_page_request, work_page_success} from '../Store/actions/workPage';

export default function Work() {
    const dispatch = useDispatch();
    const [showPopup, setPopup] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        dispatch(work_page_request());
        const fetchWork = async () => {
            const fetchWork = await fetch(`https://designer-studio-server.herokuapp.com/work/?id=${ id }`);
            
            const work = await fetchWork.json();
            
            return work;
        }

        fetchWork()
            .then(res => dispatch(work_page_success(res)))
    }, [id, dispatch])


    const shareLink = (info, index) => {
        const name = info.name.charAt(0).toUpperCase() + info.name.slice(1);
        const link = info.link;

        return (
            <a href={link} key={index} className="work__shareLink">{name}</a>
        )
    }


    const handlePopup = () => {
        setPopup(!showPopup);
    }

    const stopPropagation = (e) => {
        e.stopPropagation();
        return
    }

    const currentWork = (data) => {
        const links = data.share;
        const image = 'https://designer-studio-server.herokuapp.com/' + data.img;

        return (
            <Container fluid>
                <Row>
                    <Col className="offset-1 col-10 col-md-4 work__infoGroup">
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
                    <Col className="col-12 offset-md-1 col-md-6 work__image__container g-0" onClick={() => {handlePopup()}}>
                        <Image src={image} alt={data.title} className="work__image img-fluid"></Image>
                        <span className="pe-7s-search work__image__look"></span>
                    </Col>
                </Row>
                {showPopup && <div className="work__popup__container" onClick={() => {handlePopup()}}>
                    <Container fluid className="g-0">
                        <Row className=" g-0 justify-content-center">
                            <Col className="work__popup__image align-self-center col-10 col-lg-8" onClick={(e) => {stopPropagation(e)}}>
                                <Image src={image} alt={`popup ${data.title}`} className="img-fluid"></Image>
                                <span className="pe-7s-close work__popup__close" onClick={() => {handlePopup()}}></span>
                            </Col>
                        </Row>
                    </Container>
                </div>}
                {showPopup !== false && <div className="work__popup__bg" onClick={() => {handlePopup()}}></div>}
            </Container>
        )
    }

    const workPageLoading = () => {
        return(
            <Container>
                <Row>
                    <Col className="d-flex justify-content-center">  
                        <Spinner animation="border works__spinner"></Spinner>
                    </Col>
                </Row>
            </Container>
        )
    }

    const workNav = (data) => {
        return (
            <Container fluid="xl">
                    <Row className="work__nav__row">
                        {data.prev === false ? 
                            <Col className="col-2">
                            </Col>
                            :
                            <Col as={Link} to={`/design-studio-site/work/${data.prev}`} className="col-2 work__nav__link">
                                <div className="work__nav__link__innerWrapper">
                                    <span className="pe-7s-angle-left work_nav_icon"></span>
                                </div>
                                <div className="work__nav__link__innerWrapper d-none d-lg-block">
                                    <span className="work__nav__text">previous project</span>
                                </div>
                            </Col>}
                            <Col className="col-2 offset-3 d-flex justify-content-center">
                                <div className="work__squares__container align-self-center">
                                    <div className="work__square"></div>
                                    <div className="work__square"></div>
                                    <div className="work__square"></div>
                                    <div className="work__square"></div>
                                </div>
                            </Col>
                            {data.next === false ? 
                            <Col className="col-2 offset-3">
                            </Col>
                            :
                            <Col as={Link} to={`/design-studio-site/work/${data.next}`} className="col-2 offset-3 work__nav__link justify-content-end">
                                <div className="work__nav__link__innerWrapper d-none d-lg-block">
                                    <span className="work__nav__text">next project</span>
                                </div>
                                <div className="work__nav__link__innerWrapper">
                                    <span className="pe-7s-angle-right work_nav_icon"></span>
                                </div>
                            </Col>}
                        </Row>
                 </Container>
        )
    }

    const workPageGroup = (data) => {
        return(
            <div className="fade-in">
                <section className="work__section">
                    {currentWork(data)}
                </section>
                <section className="work__nav__section">
                    {workNav(data)}
                </section>
            </div>
        )
    }

    const data = useSelector(state => state.workPage.data);
    const loading = useSelector(state => state.workPage.loading);

    return(
        <Container fluid>
        {loading ? (
            workPageLoading()
        ) : (
            workPageGroup(data)
        )}
        </Container>
    )
}