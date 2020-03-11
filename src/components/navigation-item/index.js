import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

const NavigationItem = ({ children, to }) => (
  <S.Link to={to} exact>
    {children}
  </S.Link>
);

NavigationItem.propTypes = {
  children: PropTypes.element,
  to: PropTypes.string,
};

export default NavigationItem;
