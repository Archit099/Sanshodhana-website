import React, { useReducer, useState } from "react";
import styled from "styled-components";
import { Title } from "./AboutUs";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Skew } from './../../layout/Skew';
import Alert from "react-bootstrap/Alert";
import { initState, reducer } from "./reducers";
import { SendDetails } from "./feature/sendDetails";
import Loader from "../../layout/Loader";

export const ContactUsWrapper = styled.div`
background-color: #EE3A49;
padding-top: 10rem;
color: #eee;
.container{
    padding:2rem 10rem;
    padding-bottom: 4rem;
}

@media only screen and (max-width: 600px) {
    .container{
        padding: 1.5rem 1rem;
    }
  }
`;

const TextArea = styled.textarea`
  resize: none;
  width: 100%;
  border-radius: 10px;
  border: none;
  outline:none;
  padding: 0.5rem 0.9rem;
  font-size: 15px;
  box-size: border-box;
`;


const Heading = styled(Title)`
color: #eee;
`
const ContactUs = () => {

    const [isLoading, setLoadingStatus] = useState(false);

    const [state, dispatch] = useReducer(reducer, initState);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { fname, lname, college, email, message, subject } = state;
        setLoadingStatus(true);
        const response = await SendDetails({
            fname,
            lname,
            email,
            subject,
            message,
            college
        });
        if(response.hasError) {
            dispatch({
                type: "SET_KEY",
                key: "error",
                value: response.error
            });
        } else {
            dispatch({ type: "RESET" });
            dispatch({
                type: "SET_KEY",
                key: "success",
                value: `${response.message}! We'll get back to you soon.`
            });
        }
        setLoadingStatus(false);
    }

    const handleChange = e => {
        dispatch({
            type: "SET_KEY",
            key: e.target.name,
            value: e.target.value
        });
    }

    return (
        <ContactUsWrapper id="contact-us">
        
            <Loader isLoading={isLoading} />
            <Heading>Get in Touch!</Heading>
            <Container className="container">
                <Form onSubmit={handleSubmit}>
                    <Form.Row style={{ paddingBottom: "1.2rem" }}>
                        <Col>
                            <Form.Control required placeholder="First name" name="fname" value={state.fname} onChange={handleChange} />
                        </Col>
                        <Col>
                            <Form.Control required placeholder="Last name" name="lname" value={state.lname} onChange={handleChange} />
                        </Col>
                    </Form.Row>
                    <Form.Row style={{ paddingBottom: "1.2rem" }}>
                        <Col>
                            <Form.Control required placeholder="Email" name="email" value={state.email} onChange={handleChange} />
                        </Col>
                        <Col>
                            <Form.Control placeholder="College" name="college" value={state.college} onChange={handleChange} />
                        </Col>
                    </Form.Row>
                    <Form.Row style={{ paddingBottom: "1.2rem" }}>
                        <Col>
                            <Form.Control required placeholder="Why do you want to contact us?" name="subject" value={state.subject} onChange={handleChange} />
                        </Col>   
                    </Form.Row>
                    <Form.Row className="mb-4">
                        <TextArea rows={6} required placeholder="Your message" name="message" onChange={handleChange} value={state.message} ></TextArea>
                    </Form.Row>
                    {(state.error || state.success) && <Form.Row className="mt-4">
                        <Col>
                            <Alert variant={state.error ? "danger" : "success"}>{state.error || state.success}</Alert>
                        </Col>
                    </Form.Row>}
                    <Button variant="primary" style={{ backgroundColor: "#161616" }} type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
            <Skew topColor="#EE3A49" bottomColor="#161616" clockwise={true} />
        </ContactUsWrapper>
    )
}

export default ContactUs;

/*
    <Form.Control as="select" size="md" custom defaultValue="Major Pursuing Degree">
                                <option value="" disabled hidden>Major Pursuing Degree</option>
                                <option>Computer Science</option>
                                <option>Electrical Engineering</option>
                                <option>Electronics and Communication Engineering</option>
                                <option>Information Technology</option>
                                <option>Information and Communication Technology</option>
                                <option>Civil Engineering</option>
                                <option>Bachelors of Business Administration</option>
                                <option>Masters of Business Administration</option>
                                <option>Mechanical Engineering</option>

                            </Form.Control>


<Col>
                            <Form.Control as="select" size="md" custom defaultValue="Renewable Energy">
                                <option value="" disabled hidden>Core Area of Interest</option>
                                <option>Renewable Energy</option>
                                <option>Core Electrical</option>
                                <option>Machine Learning and Data Science</option>
                                <option>Computer Vision and Image Processing</option>
                                <option>Electronics and circuit design</option>
                                <option>Electronics and circuit design</option>
                                <option>Management and Business Strategies</option>
                                <option>Marketing and Product</option>
                                <option>Mechanical Engineering</option>
                            </Form.Control>
                        </Col>
*/