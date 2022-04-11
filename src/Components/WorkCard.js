import React from 'react'
import { Col, Image } from 'react-bootstrap';


function WorkCard({data, handlePopup}) {

    const image = 'https://designer-studio-server.herokuapp.com/' + data.img;



    const shareLink = (info, index) => {
        const name = info.name.charAt(0).toUpperCase() + info.name.slice(1);
        const link = info.link;

        return (
            <a href={link} key={index} className="work__shareLink">{name}</a>
        )
    }

    return (
        <div className="work__card">
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
                    data.share.map((obj, i) => shareLink(obj, i))
                }
            </div>
            </Col>
            <Col className="col-12 offset-md-1 col-md-6 work__image__container g-0" onClick={() => {handlePopup(data.img)}}>
                <Image src={image} alt={data.title} className="work__image img-fluid"></Image>
                <span className="pe-7s-search work__image__look"></span>
            </Col>
        </div>
  )
}

export default WorkCard