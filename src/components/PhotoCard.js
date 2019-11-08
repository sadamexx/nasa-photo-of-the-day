import React from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, 
  } from 'reactstrap';
import { Col } from 'reactstrap';

const PhotoCard = props => {
    return (  
        <Col xs="12" s="6" md="4">    
        <Card>
        <CardImg top width="100%" src={props.url} alt="APOD-img" />
        <CardBody>
          <CardTitle>Photo Title: {props.title}</CardTitle>
          <CardSubtitle>Photo for: {props.date}</CardSubtitle>
          <CardText>{props.explanation}</CardText>          
        </CardBody>
      </Card>
      </Col>
                
    );//ends return
};//ends Photocard

export default PhotoCard;