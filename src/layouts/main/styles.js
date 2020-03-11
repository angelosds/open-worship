import styled from 'styled-components';

import { device } from '../../constants/device';

export const MainLayout = styled.main`
  background-color: rgb(var(--background));
  color: rgb(var(--text));
  display: grid;
  font-family: 'Quicksand', serif;
  grid-template-columns: 70px 1fr;
  grid-template-rows: 70px 1fr;
  height: 100vh;
  overflow-x: auto;
  width: 100vw;

  @media ${device.mobile} {
    grid-gap: 16px;
    padding: 16px;
  }

  @media ${device.desktop} {
    grid-gap: 32px;
    padding: 32px;
  }
`;
