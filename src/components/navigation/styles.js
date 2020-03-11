import styled from 'styled-components';

import { device } from '../../constants/device';

export const Navigation = styled.nav`
  @media ${device.mobile} {
    position: fixed;
    left: 16px;
    bottom: 16px;
    width: calc(100vw - 32px);
  }

  @media ${device.desktop} {
    display: flex;
    height: 100%;
  }
`;

export const List = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;

  @media ${device.desktop} {
    flex-direction: column;
    height: 100%;
  }
`;

export const ListItem = styled.li`
  display: block;

  @media ${device.mobile} {
    &:last-child {
      margin-left: auto;
    }

    &:not(:last-child) {
      margin-right: 8px;
    }
  }

  @media ${device.desktop} {
    &:last-child {
      margin-top: auto;
    }

    &:not(:last-child) {
      margin-bottom: 8px;
    }
  }
`;
