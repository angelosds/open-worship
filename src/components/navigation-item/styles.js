import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  border-radius: 16px;
  color: rgb(var(--primary));
  display: block;
  height: 54px;
  outline: 0;
  padding: 16px;
  transition: .2s all linear;
  width: 54px;

  &.active {
    background-color: rgb(var(--primary));
    box-shadow: 0px 0px 32px rgba(var(--primary), .5);
    color: rgb(var(--card-background));
  }
`;
