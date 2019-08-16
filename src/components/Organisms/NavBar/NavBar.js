import React, { Component } from 'react';
import styled from 'styled-components'
import { NavLink } from 'react-router-dom';
import { routes } from '../../../routes/routes';
import logo from '../../../assets/logo.png';

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 8vh;
  background-color: black;
  position:relative;
  box-shadow: 1px 1px 4px white;
`;
const Logo = styled.div`

`;
const NavList = styled.ul`
    display:flex;
    width:30%;
    justify-content:space-around;
    list-style:none;
    border-top-left-radius:20px;
    @media screen and (max-width:768px) {
        position:absolute;
        right: 0px;
        height:92vh;
        top:85px;
        background-color: #b4b8bf;
        display:flex;
        flex-direction: column;
        align-items:center;
        transform:translateX(${({isVisible}) => (isVisible ? '0%' : '100%')});
        transition:  0.3s ease-in-out;
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
    color:white;
    font-weight: bold;
    font-size:14px;
    &.active {
    color: #c200ff;
    }
    @media screen and (max-width:768px) {
        color:black;
        &.active {
        color: #c200ff;
        }
    }

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
const ImgLogo = styled.img`
    @media screen and (max-width:768px) {
        max-width: 300px;
        max-height:250px;
    }
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
             <ImgLogo src={logo} />
            </Logo>
            <NavList isVisible={this.state.isBurgerClicked}>
                <NavItem>
                    <StyledNavLink  to={routes.home}>Strona Głowna</StyledNavLink>
                </NavItem>
                <NavItem>
                    <StyledNavLink to={routes.contact}>Kontakt</StyledNavLink>
                </NavItem>
                <NavItem>
                    <StyledNavLink to={routes.about}>O Nas</StyledNavLink>
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