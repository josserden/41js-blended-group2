import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavBar, Container, HeaderWrapper, NavLinkStyled } from 'components';

export const Header = () => {
  return (
    <>
      <NavBar>
        <Container>
          <HeaderWrapper>
            <NavLinkStyled to="/">Home</NavLinkStyled>
            <NavLinkStyled to="/add">Add Contact</NavLinkStyled>
          </HeaderWrapper>
        </Container>
      </NavBar>

      <Outlet />
    </>
  );
};
