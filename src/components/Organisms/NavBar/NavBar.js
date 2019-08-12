import React, { Component } from 'react';
import styled from 'styled-components'
import { NavLink } from 'react-router-dom';


const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 8vh;
  background-color: grey;
  position:relative;

  @media screen and (max-width:768px) {
     /* overflow:hidden !important; */
  }

`;
const Logo = styled.div`
  color: white;
  text-transform: uppercase;
  letter-spacing: 5px;
  font-size: 20px;

`;
const NavList = styled.ul`
    display:flex;
    width:30%;
    justify-content:space-around;
    list-style:none;
  
    @media screen and (max-width:768px) {
        position:absolute;
        right: 0px;
        height:92vh;
        top:8vh;
        width:30% ;
        background-color: grey;
        display:flex;
        flex-direction: column;
        align-items:center;
        transform:translateX(${({isVisible}) => (isVisible ? '0%' : '100%')});
        transition: transform 0.2s ease-in-out;
    }
    @media screen and (max-width:1024px) {
      width:45%;
  }
`;

const NavItem = styled.li`

`;
const StyledNavLink = styled(NavLink)`
    text-decoration:none;
    letter-spacing:3px;
    color:black;
    font-weight: bold;
    font-size:14px;

`;

const Burger =styled.div`
    display:none;    
    @media screen and (max-width:768px) {
     display:block;
     cursor: pointer;

  }   
`;

const Line1 =styled.div`
    width:25px;
    height:3px;
    background-color:white;
    margin:5px !important;
`;
const Line2 =styled.div`
    width:25px;
    background-color:white;
    height:3px;
    margin:5px !important;

`;
const Line3 =styled.div`
    width:25px;
    background-color:white;
    height:3px;
    margin:5px !important;

`;



class NavBar extends Component {
    state = {
        isBurgerClicked : false,
    }

    handleBurgerCLick = () => {
        this.setState(prevState => ({
            isBurgerClicked: !prevState.isBurgerClicked,
        }))
    }

    render() {

    return(
        <Nav>
            <Logo>
               <h4>The Nav</h4>
            </Logo>
            <NavList isVisible={this.state.isBurgerClicked}>
                <NavItem>
                    <StyledNavLink  to="">Home</StyledNavLink>
                </NavItem>
                <NavItem>
                    <StyledNavLink to="">Home</StyledNavLink>
                </NavItem>
                <NavItem>
                    <StyledNavLink to="">Home</StyledNavLink>
                </NavItem>
            </NavList>
            <Burger onClick={this.handleBurgerCLick}>
                <Line1/>
                <Line2/>
                <Line3/>
            </Burger>
        </Nav>
    )
}
}



export default NavBar;