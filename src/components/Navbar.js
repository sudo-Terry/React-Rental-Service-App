import React from 'react';
import styled, { css } from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { menuData } from '../data/MenuData';
import { Button } from './Button';
import { FaBars } from 'react-icons/fa';

const Nav = styled.nav`
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;
`

const NavLink = css`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
`

const Logo = styled(Link)`
  ${NavLink}
  font-style: italic;
`

const MenuBars = styled.div`
  display: none;

  @media screen and (max-width: 768px){
    color: #fff;
    display: block;
    font-size: 2.5rem;
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 10px;
    transform: translateY(-50%, 25%);
  }
`

const NavMenu = styled.div`
  display: flex;
  align-items: center ;
  margin-right: -48px;

  @media screen and (max-width: 768px){
    display: none;
  }
`

const NavMenuLinks = styled(Link)`
  ${NavLink}
`

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px){
    display: none;
  }
`

function Navbar({toggle}) {
  return (
    <Nav>
      <Logo to="/">ELIXR</Logo>
      <MenuBars onClick={toggle}>
        <FaBars />
      </MenuBars>
      <NavMenu>
        {menuData.map((item, index) => (
          <NavMenuLinks to={item.path} key={index}>
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
      <NavBtn>
        <Button to='/contact' primary='true'>
          Contact Us
        </Button>
      </NavBtn>
    </Nav>
  );
}

export default Navbar;