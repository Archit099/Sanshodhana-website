import React from "react";
import styled from "styled-components";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CustomCard from './../../layout/Card';
import { Skew } from './../../layout/Skew';


const AboutUsWrapper = styled.div`
  background-color: #eee;
  padding-top: 10rem;
`;

export const Title = styled.div`
text-align: center;
font-size: 3rem;
color: #EE3A49;
font-weight: bolder;
`

const Content = styled.div`
color:#161616;
font-size: 1.2rem;
font-weight: 400;
text-align: justify;
padding: 2rem 0rem;

`;


const AboutUs = () => {
  return (
    <div>
      <AboutUsWrapper id="about-us">
        <Container>
          <Title>
            WHAT ARE WE?
      </Title>
      <Row>
      
      <Col  xs={12} lg={6}>
      <img  style={{marginTop:"7%"}} width="100%" height="70%" src="/assets/logo1922.svg" alt="logo" />
      </Col>
      <Col xs={12} lg={6}  style={{ paddingBottom: "2rem"}}>
        <Content style={{lineHeight:"190%"}}>
           We are VSearchX; a research community - where the inquisitive like-minded smart minds come together, work and brain-storm to solve problems; do scientific research and collaborate together to their best potential. If you are looking forward to write research/review papers for higher studies, or to work on manuscripts or want to get your work peer-reviewed and whole lot of research things, we are here to provide mentorship, support and guidance for your bright career.
          </Content>
      </Col>
      </Row>
          
        </Container>

        <Container>
         <Row style={{paddingBottom:"1%"}}>
         <Col lg={4} xs={12} md={4}>
         
       <div style={{textAlign:"Center"}}>
                 <img width="259" height="209" src="https://theblockchainschool.io/wp-content/uploads/brizy/25506/assets/images/31a92baf44f001c32c22a441cd023d54.png" class="attachment-large size-large" alt="" loading="lazy"/>											</div>
     
     
                 <div style={{textAlign:"Center"}}><h3>feature1</h3></div>
                   <div style={{textAlign:"Center"}}><p>Interaction and communication with educators, peer chats, ask questions, answer live polls, and get your doubts cleared in Discord class rooms and more in our up-and-coming features.</p></div> 
         </Col>

         <Col lg={4} xs={12} md={4}>
         
       <div style={{textAlign:"Center"}}>
                 <img width="259" height="209" src="https://theblockchainschool.io/wp-content/uploads/brizy/25506/assets/images/31a92baf44f001c32c22a441cd023d54.png" class="attachment-large size-large" alt="" loading="lazy"/>											</div>
     
     
                 <div style={{textAlign:"Center"}}><h3>feature1</h3></div>
                   <div style={{textAlign:"Center"}}><p>Interaction and communication with educators, peer chats, ask questions, answer live polls, and get your doubts cleared in Discord class rooms and more in our up-and-coming features.</p></div> 
         </Col>

         <Col lg={4} xs={12} md={4}>
         
       <div style={{textAlign:"Center"}}>
                 <img width="259" height="209" src="https://theblockchainschool.io/wp-content/uploads/brizy/25506/assets/images/31a92baf44f001c32c22a441cd023d54.png" class="attachment-large size-large" alt="" loading="lazy"/>											</div>
     
     
                 <div style={{textAlign:"Center"}}><h3>feature1</h3></div>
                   <div style={{textAlign:"Center"}}><p>Interaction and communication with educators, peer chats, ask questions, answer live polls, and get your doubts cleared in Discord class rooms and more in our up-and-coming features.</p></div> 
         </Col>
         </Row>
        </Container>

      </AboutUsWrapper>
      <Skew topColor="#eee" bottomColor="white" clockwise={true}/>
    </div>
  )
}

export default AboutUs;


