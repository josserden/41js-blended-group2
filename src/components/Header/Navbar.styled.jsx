import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavBar = styled.header`
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: ${props => props.theme.colors.white};

  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const HeaderWrapper = styled.nav`
  display: flex;
  align-items: center;

  gap: 20px;
`;

export const NavLinkStyled = styled(NavLink)`
  color: ${props => props.theme.colors.black};
  font-size: ${props => props.theme.fontSizes.md};
  font-weight: 700;
  text-transform: uppercase;

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.primary};
  }

  &.active {
    color: ${props => props.theme.colors.primary};
  }
`;
