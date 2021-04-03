import React from 'react';
import styled from "styled-components";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Skew } from './../../layout/Skew';

export const ImageWrapper = styled.div`
    background-image: url("/assets/home/homebg.png");
    background-color: #161616;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100vw;
`;

const Illustration = styled.div`
    content: url(/assets/home/research.svg);  
    width: 100%;
    height: 100%;
    padding: 2rem 1rem;
    padding-left: 3rem;
`

const Hero = styled.div`
color: white; 
text-align: center;
padding: 0rem 1rem;
margin-right: 2rem;
h2{
 font-size: 2.2rem;
 font-weight: bolder;
 padding-bottom: 1.5rem;
}
p{
    
    font-size: 1.3rem;
}
`
const ButtonWrapper = styled.div`
padding-top:1.5rem;


.btn{
background-color:#6880d5; 
border-color:#98a7db;
font-weight: bold;
}

a{
    color: #eee; 
    text-decoration:none;
}

&:hover{
    opacity: 0.9;
    transition:0.32s;
    color: white;
}
`
const Home = () => {
    return (<div style={{ backgroundColor: "white" }}>
        <ImageWrapper>
            <Container>
                <Row style={{ padding: "4rem 0" }}>
                    <Col md={6}>
                        <Hero>

                            <h1> A Research Community</h1>
                            <h2>For Everyone!</h2>
                            <p> Are you an aspiring Researcher? 🔎</p>
                            <p>Want to work, dig and collaborate with the similar smartest and curious minds? 🧠</p>
                            <ButtonWrapper>
                                <Button className="btn" size="lg">
                                    <a href="https://discord.com/invite/Cj2qTPg" target="_blank"> <Row><Col xs={2}><img src="https://assets.website-files.com/5e78bae67766d13164960de5/5f7c99050f4d14c1b5ccae9e_5f437aa3879a60cc34295989_Layer%201-p-500.png" loading="lazy" width="30" alt=""></img> </Col> <Col xs={10}>JOIN OUR COMMUNITY</Col> </Row></a>
                                </Button>
                            </ButtonWrapper>
                        </Hero>
                    </Col>
                    <Col md={6}><Illustration /></Col>
                </Row>
            </Container>
            <Skew topColor="#161616" bottomColor="#eee" clockwise={true}></Skew>
        </ImageWrapper>
    </div>)
}

export default Home;