import React, {useState} from "react";
import styled, {css} from "styled-components/macro";
import {Link} from "react-router-dom";
import {Link as LinkS} from "react-scroll";
import {menuData} from "../data/MenuData";
import {Button} from "./Button";
import {FaBars} from "react-icons/fa";
import {animateScroll as scroll} from "react-scroll";

const Nav = styled.nav`
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;
  background: transparent;
  transition: 0.5s;
  transition-timing-function: ease-in-out;

  &.active {
    background: #101522;
  }
`;

const NavLink = css`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;

  &.active {
    border-bottom: 3px solid #fff;
  }
`;

const Logo = styled(Link)`
  ${NavLink}
  font-size: 2rem;
  font-style: italic;
`;

const MenuBars = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    color: #fff;
    display: block;
    font-size: 2.5rem;
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 10px;
    transform: translateY(-50%, 25%);
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavMenuLinks = styled(LinkS)`
  ${NavLink}
  padding: 1.8rem 1rem;
  transition: 0.2ms all ease-in-out;

  &:hover {
    border-bottom: 2px solid #fff;
  }
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

function Navbar({toggle}) {
  const [navBackActive, setNavBackActive] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 500) {
      setNavBackActive(true);
    } else {
      setNavBackActive(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <Nav className={navBackActive ? "active" : ""}>
      <Logo to="/" onClick={toggleHome}>
        Home4U
      </Logo>
      <MenuBars onClick={toggle}>
        <FaBars />
      </MenuBars>
      <NavMenu>
        {menuData.map((item, index) => (
          <NavMenuLinks
            to={item.path}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            key={index}
          >
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
      <NavBtn>
        <Button to="/contact" primary="false">
          Contact Us
        </Button>
      </NavBtn>
    </Nav>
  );
}

export default Navbar;
