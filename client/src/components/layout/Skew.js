import React from 'react';
import styled from "styled-components";

export function Skew(props) {
    
    const SkewComponent = styled.div`
    width:100%;
    height:100px;
    position:absolute;
    left:0px;
    ${ props.clockwise ?
      `background: linear-gradient(to right bottom, ${props.topColor} 49%, ${props.bottomColor} 50%),    linear-gradient(-50deg, #ffffff 16px, #000 0)`:
      `background: linear-gradient(to left bottom, ${props.topColor} 49%, ${props.bottomColor} 50%),    linear-gradient(-50deg, #ffffff 16px, #000 0)`
    }
    
`
    return (
      <SkewComponent></SkewComponent>
    );
}