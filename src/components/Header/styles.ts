import { Link } from 'react-router-dom';
import styled from 'styled-components';


const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: ${props => props.theme.colors.buttons}; 
  color: ${props => props.theme.colors.lightWhite};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 10;
  transition: all 0.3s ease-in-out;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: ${props => props.theme.colors.lightWhite};
  text-decoration: none;
  margin-left: 1rem;
  font-size: 1rem;

  &:hover {
    text-decoration: underline;
    text-decoration-color: ${props => props.theme.colors.lightWhite};
  }
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: ${props => props.theme.fonts.weight.bold};
`;

export {
    HeaderContainer,
    Nav,
    NavLink,
    Logo,
}