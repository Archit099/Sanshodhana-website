
import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import { Skew } from './../../layout/Skew';
import styled from "styled-components";
import { Title } from "./AboutUs";
import Button from 'react-bootstrap/Button';

const TitleWrapper = styled.div`
  background-color: white;
  padding-top: 9rem;
  margin-bottom:0;
`;
const Head = styled(Title)`
color: Balck;
`
function Courses() {
    return (
        <div id="courses">   
        <div>       
            <Container>
               <TitleWrapper><Head style={{color:"Black",marginTop:"-2%"}}>Courses</Head></TitleWrapper> 
               <Row style={{marginTop:"5%",marginBottom:"4%"}}>
                <Col lg={4} md={4} xs={12}>
                <div className="courses-image"><a href="https://courses.learncodeonline.in/learn/FullStack-Django-Developer-Freelance-ready" className="d-block image"><img src="/assets/AboutUs/aboutus.jpg" height="250px" width="100%" alt="features"/></a><a className="fav" href="/#"></a></div>
                </Col>
                <Col lg={4} md={4} xs={12}>
                <div className="courses-image"><a href="https://courses.learncodeonline.in/learn/FullStack-Django-Developer-Freelance-ready" className="d-block image"><img src="/assets/AboutUs/aboutus.jpg" height="250px" width="100%" alt="features"/></a><a className="fav" href="/#"></a></div>
                </Col>
                <Col lg={4} md={4} xs={12}>
                <div className="courses-image"><a href="https://courses.learncodeonline.in/learn/FullStack-Django-Developer-Freelance-ready" className="d-block image"><img src="/assets/AboutUs/aboutus.jpg" height="250px" width="100%" alt="features"/></a><a className="fav" href="/#"></a></div>
                </Col>
               </Row>
              
            </Container>
            <Skew topColor="white" bottomColor="#EE3A49"  />
        </div>

        </div>
    );
}

export default Courses
