import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { pxToRem } from 'styles';

interface NavbarProps {
  theme: any;
}

interface MenuProps {
  active: boolean;
}

const Navbar: React.FunctionComponent<NavbarProps> = ({ theme }) => {
  const [navActive, toggleNav] = useState(false);

  return (
    <Container theme={theme}>
      <NavLeft>
        <Logo theme={theme}>
          <NavLink to="/">Typescript</NavLink>
        </Logo>
        <Menu
          theme={theme}
          active={navActive}
          onClick={() => toggleNav(!navActive)}
        >
          <span />
          <span />
          <span />
          <span />
        </Menu>
      </NavLeft>
      <NavRight active={navActive}>
        <NavLink to="/Login">Login</NavLink>
        <NavLink to="/Dashboard">Dashboard</NavLink>
        <NavLink to="/Profile">Profile</NavLink>
      </NavRight>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: ${pxToRem(80)};
  padding: ${pxToRem(20)};
  font-family: Montserrat, 'Lucida Sans Unicode', 'Lucida Grande', sans-serif;
  font-size: ${pxToRem(20)};
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;

  @media screen and (min-width: ${pxToRem(480)}) {
    flex-direction: row;
    height: ${pxToRem(100)};
    justify-content: space-between;
    padding: ${pxToRem(20)} ${pxToRem(50)};
  }
`;

const NavLeft = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: ${pxToRem(480)}) {
    width: 30%;
  }
`;

const NavRight = styled.div<MenuProps>`
  display: ${({ active }) => (active ? 'flex' : 'none')};
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin: ${pxToRem(20)} 0;
  box-sizing: border-box;

  @media screen and (min-width: ${pxToRem(480)}) {
    display: flex;
    margin: 0;
    flex-direction: row;
    width: 30%;
  }
`;

const Logo = styled.div`
  color: ${({ theme }) => theme.logoColor};
  line-height: 120%;
  font-size: ${pxToRem(26)};
  letter-spacing: ${pxToRem(4)};
  @media screen and (min-width: ${pxToRem(480)}) {
    font-size: ${pxToRem(34)};
    letter-spacing: ${pxToRem(10)};
  }
`;

const Menu = styled.div<MenuProps>`
  width: ${pxToRem(30)};
  height: ${pxToRem(25)};
  position: relative;
  display: block;
  span {
    background: ${({ theme }) => theme.logoColor};
    width: ${pxToRem(30)};
    height: ${pxToRem(3)};
    display: block;
    margin: ${pxToRem(-2)} 0 0;
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    transition: 0.3s ease;
    &:first-child {
      top: 0;
      opacity: ${({ active }) => (active ? 0 : 1)};
    }
    &:last-child {
      bottom: 0;
      opacity: ${({ active }) => (active ? 0 : 1)};
      top: auto;
    }
    &:nth-child(2) {
      transform: ${({ active }) => active && 'rotate(45deg)'};
    }
    &:nth-child(3) {
      transform: ${({ active }) => active && 'rotate(-45deg)'};
    }
  }
  @media screen and (min-width: ${pxToRem(480)}) {
    display: none;
  }
`;

export default Navbar;
