import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    z-index: 1020;
    position: fixed;
    top: 0px;
    left: 0px;
    background-color: rgba(0,0,0,0.9);
`;

const LoaderContainer = styled.div`
    z-index: 1021;
    position: absolute;
    left: 50%;    
    top: 250px;
    transform: translate(-50%, 0);
    text-align: center;
`;

const RotatingLoader = styled.div`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 15px solid white;
    border-top-color: blue;
    animation-name: spin;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;


    @keyframes spin { 
        from { 
            transform: rotate(0deg); 
        } to { 
            transform: rotate(360deg); 
        }
    }
`;

const Content = styled.div`
    font-size: 18px;
    position: relative;
    top: -90px;
`;

const Loader = ({ isLoading }) => {
    if(isLoading) {
        return(
            <Wrapper>
                <LoaderContainer>
                    <RotatingLoader />
                    <Content>Loading...</Content>
                </LoaderContainer>
            </Wrapper>
        );
    }
    return <div />
}
 
export default Loader;