import styled from 'styled-components'
import React from 'react';
import Paragraph from '../Atoms/Paragraph/Paragraph';
import { Link } from 'react-router-dom';
import H from '../Atoms/H/H';


const IMG = styled.img`
  max-width: 100%;
  height: auto;
  box-shadow:0 0 10px white;
  border-radius: 20px;
  display: block;
`;

const StyledParagraph = styled(Paragraph)`
    font-weight:${({theme}) => theme.weight.bold};
    font-size:${({theme}) => theme.fontSize.m};
    text-align:center;
`;
const Buy = styled(Paragraph)`
    font-weight:${({theme}) => theme.weight.bold};
    font-size:${({theme}) => theme.fontSize.m};
    text-align:center;
    color:green;
      &:hover {
    color: gold;
  }
`;
const StyledLink = styled(Link)`
  text-decoration:none;
`;

const StyledH1= styled.h1`
 text-transform: uppercase;
 font-size:${({theme}) => theme.fontSize.l};
 text-align:center;
 
`;


const Info = styled.div`
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color:black;
`;
const Container = styled.div`
position:relative;
align-self: center;
&:hover {
    opacity: 1;
  }

`;

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  border-radius:20px;
  opacity: 0;
  transition: .5s ease;
  background-color: white;

  &:hover {
    opacity: 1;
  }

`;



const Item = (props) => {
    return(
      <Container>
        <IMG src={require(`../../assets/Photos/${props.url}`)} alt={props.title}/>
        <Wrapper>
          <Info>
            <StyledH1>{props.title}</StyledH1>
          <StyledParagraph> Cena: {props.price}</StyledParagraph>
          <StyledLink to="/contact"><Buy>KUP</Buy></StyledLink>

          </Info>
        </Wrapper>
        
      </Container>
    
    )
}

export default Item;