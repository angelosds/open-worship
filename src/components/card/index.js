import React from 'react';

import * as S from './styles';

const Card = ({ children, small, medium }) => (
  <S.Card 
    small={small}
    medium={medium}
  >{children}</S.Card>
);

export default Card;
