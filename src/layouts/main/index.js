import React from 'react';
import PropTypes from 'prop-types';

import Card from '../../components/card';
import Logo from '../../components/logo';
import Navigation from '../../components/navigation';

import * as S from './styles';

const MainLayout = ({ children }) => (
  <S.MainLayout>
    <Card medium>
      <Logo />
    </Card>
    <header>
      {/* TODO - Implement */}
    </header>
    <Navigation />
    {children}
  </S.MainLayout>
);

MainLayout.propTypes = {
  children: PropTypes.element,
};

export default MainLayout;
