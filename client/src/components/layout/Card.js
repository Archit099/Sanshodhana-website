import React from "react";
import Card from 'react-bootstrap/Card';

export default function CustomCard(props) {
    return(
        <Card >
        <Card.Img style={{maxHeight: "200px"}} src={props.img} variant="top" />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            {props.text}
          </Card.Text>
        </Card.Body>
    </Card>
    )
}