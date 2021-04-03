import React from 'react';
import styled from "styled-components";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const FooterWrapper = styled.div`
    width: 100vw;
    color: white;
    background-color:#161616;
    font-size: 1.2rem;

    .container{
        padding-top: 10rem;
        padding-left: 0;
        padding-right:0;
        padding-bottom: 70px;
    }

    div {
        text-align: center;
    }
`;

const LinkTitle = styled.div`
    font-size: 1.2rem;
    font-weight:bold;
    padding-bottom: 1.1rem;
`

const Link = styled.div`
    font-size: 1rem;
    font-weight:400;
    padding-bottom: 0.8rem;

    a {
        color: white;
    }
`;

const StyledContainer = styled(Container)`
    div {
        ul {
            list-style: none;

            li > a {
                color: white;
            }
        }
    }
`;


const Footer = () => {
    return (
        <FooterWrapper>
            {window.innerWidth >= 792 ? (<Container className="container">
                <Row>
                    <Col md={4}>
                        <img width="200px" height="200px" src="/assets/logo.svg" alt="logo" />
                    </Col>
                    <Col md={8}>
                        <Row>
                            <Col md={4}>
                                <LinkTitle>Follow us</LinkTitle>
                                <Link><a href="https://www.instagram.com/vsearchx">Instagram</a></Link>
                                <Link><a href="https://youtube.com/channel/UC5XvWLTdk7G17wVxv6iUuNg">Youtube</a></Link>
                                <Link><a href="https://www.google.com/">LinkedIn</a></Link>
                            </Col>

                            <Col md={4}>
                                <LinkTitle>Contact</LinkTitle>
                                <Link><a href="mailto:vsearchx@gmail.com">vsearchx@gmail.com</a></Link>
                                <Link><a href="tel:+919426765982">+91 9426765982</a></Link>
                                <Link><a href="tel:+918200485403">+91 8200485403</a></Link>
                                <Link><a href="tel:+919106573885">+91 9106573885</a></Link>
                            </Col>

                            <Col md={4}>
                                <LinkTitle>Address</LinkTitle>
                                <Link>Ahmedabad, Gujarat,</Link>
                                <Link>India</Link>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>) : (<StyledContainer>
                <div className="mb-4">
                    <img width="200px" height="200px" src="/assets/logo.svg" alt="logo" />
                </div>
                <div className="mb-5">
                    <LinkTitle>Follow us</LinkTitle>
                    <Link><a href="https://www.instagram.com/vsearchx">Instagram</a></Link>
                    <Link><a href="https://youtube.com/channel/UC5XvWLTdk7G17wVxv6iUuNg">Youtube</a></Link>
                    <Link><a href="https://www.google.com/">LinkedIn</a></Link>
                </div>
                <div className="mb-5">
                    <LinkTitle>Contact</LinkTitle>
                    <Link><a href="mailto:vsearchx@gmail.com">vsearchx@gmail.com</a></Link>
                    <Link><a href="tel:+919426765982">+91 9426765982</a></Link>
                    <Link><a href="tel:+918200485403">+91 8200485403</a></Link>
                    <Link><a href="tel:+919106573885">+91 9106573885</a></Link>
                </div>
                <div>
                    <LinkTitle>Address</LinkTitle>
                    <Link>Ahmedabad, Gujarat,</Link>
                    <Link>India</Link>
                </div>
            </StyledContainer>)}
        </FooterWrapper>
    );
}

export default Footer;