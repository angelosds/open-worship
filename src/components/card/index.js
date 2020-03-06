import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

const Card = ({ children, small, medium }) => (
  <S.Card 
    small={small}
    medium={medium}
  >{children}</S.Card>
);

Card.propTypes = {
  children: PropTypes.element,
  small: PropTypes.bool,
  medium: PropTypes.bool,
};

export default Card;
