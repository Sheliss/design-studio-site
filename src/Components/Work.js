import React, { useEffect, useRef, useState } from 'react';
import { Container, Row, Col, Spinner, Image} from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { work_page_request, work_page_success} from '../Store/actions/workPage';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import WorkCard from './WorkCard';

export default function Work() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const slider = useRef();
    const [showPopup, setPopup] = useState(false);
    const [popupImg, setPopupImg] = useState('#');

    useEffect(() => {
        dispatch(work_page_request());
        const fetchWork = async () => {
            const fetchWork = await fetch(`https://designer-studio-server.herokuapp.com/works-all`);
            
            const work = await fetchWork.json();
            
            return work;
        }


        fetchWork()
            .then(res => dispatch(work_page_success(res)))
    }, [id, dispatch])

    const nextSlide = () => {
        slider.current.slickNext();
      };
    const previousSlide = () => {
        slider.current.slickPrev();
      };


    const handlePopup = (img) => {
        setPopupImg('https://designer-studio-server.herokuapp.com/' + img);
        setPopup(!showPopup);
    }

    const stopPropagation = (e) => {
        e.stopPropagation();
        return
    }

    const currentWork = (data) => {
        const settings = {
            arrows: false,
            initialSlide: parseInt(id)
        }
        return (
            <Container fluid>
               <Slider {...settings} ref={(c) => (slider.current = c)}>
                   {data.map((obj, i) => {
                       return (
                           <WorkCard key={i} data={obj} handlePopup={handlePopup}/>
                       )
                   })}
               </Slider>
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

  
    const workNav = () => {
        return (
            <Container fluid="xl">
                    <Row className="work__nav__row">
                            <Col className="col-2">
                                <button className="work__nav__link" onClick={() => previousSlide()}>
                                    <div className="work__nav__link__innerWrapper">
                                        <span className="pe-7s-angle-left work_nav_icon"></span>
                                    </div>
                                    <div className="work__nav__link__innerWrapper d-none d-lg-block">
                                        <span className="work__nav__text">previous project</span>
                                    </div>
                                </button>
                            </Col>
                            <Col className="col-2 offset-3 d-flex justify-content-center">
                                <div className="work__squares__container align-self-center">
                                    <div className="work__square"></div>
                                    <div className="work__square"></div>
                                    <div className="work__square"></div>
                                    <div className="work__square"></div>
                                </div>
                            </Col>
                            <Col className="col-2 offset-3 right__arrow__anchor">
                                <button className='work__nav__link right__arrow_fix' onClick={() => nextSlide()}>
                                    <div className="work__nav__link__innerWrapper d-none d-lg-block">
                                        <span className="work__nav__text">next project</span>
                                    </div>
                                    <div className="work__nav__link__innerWrapper">
                                        <span className="pe-7s-angle-right work_nav_icon"></span>
                                    </div>
                                </button>
                            </Col>
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
                    {workNav()}
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
        {showPopup && <div className="work__popup__container" onClick={() => {handlePopup()}}>
                    <Container fluid className="g-0">
                        <Row className=" g-0 justify-content-center">
                            <Col className="work__popup__image align-self-center col-10 col-lg-8" onClick={(e) => {stopPropagation(e)}}>
                                <Image src={popupImg} alt={`popup ${data.title}`} className="img-fluid"></Image>
                                <span className="pe-7s-close work__popup__close" onClick={() => {handlePopup()}}></span>
                            </Col>
                        </Row>
                    </Container>
                </div>}
                {showPopup !== false && <div className="work__popup__bg" onClick={() => {handlePopup()}}></div>}
        </Container>
    )
}