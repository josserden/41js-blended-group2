import React from 'react';
import { Outlet } from 'react-router-dom';
import { IoLogoReact } from 'react-icons/io5';
import { NavBar, Container, HeaderWrapper, NavLinkStyled } from 'components';
import { useTheme } from '@emotion/react';

export const Header = () => {
  const theme = useTheme();

  return (
    <>
      <NavBar>
        <Container>
          <HeaderWrapper>
            <IoLogoReact size="40px" color={theme.colors.primary} />

            <NavLinkStyled to="/">Home</NavLinkStyled>
            <NavLinkStyled to="/add">Add Contact</NavLinkStyled>
          </HeaderWrapper>
        </Container>
      </NavBar>

      <Outlet />
    </>
  );
};
