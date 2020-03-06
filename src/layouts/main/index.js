import React from 'react';

import Card from '../../components/card';
import Logo from '../../components/logo';

import * as S from './styles';

const MainLayout = ({ children }) => (
  <S.MainLayout>
    <Card medium>
      <Logo />
    </Card>
    {children}
  </S.MainLayout>
);

export default MainLayout;
