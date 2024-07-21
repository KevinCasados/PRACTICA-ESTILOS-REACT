import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderContainer, Nav, NavLink, Logo } from './styles';

interface HeaderProps {
  appName: string;
}

const Header = ({ appName }: HeaderProps) => {
  return (
    <HeaderContainer>
      <Logo>{appName}</Logo>
      <Nav>
        <NavLink to="/movies">Movie List</NavLink>
        <NavLink to="/">Login</NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;


