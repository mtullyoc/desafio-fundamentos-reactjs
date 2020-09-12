import React from 'react';

import { Link } from 'react-router-dom';

import { Container, LinkItem } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
  focus: 'Dashboard' | 'Import';
}

const Header: React.FC<HeaderProps> = ({
  size = 'large',
  focus = 'Dashboard',
}: HeaderProps) => (
  <Container size={size}>
    <header>
      <img src={Logo} alt="GoFinances" />
      <nav>
        <Link to="/">
          <LinkItem isFocused={focus === 'Dashboard'}>Listagem</LinkItem>
        </Link>
        <Link to="/import">
          <LinkItem isFocused={focus === 'Import'}>Importar</LinkItem>
        </Link>
      </nav>
    </header>
  </Container>
);

export default Header;
