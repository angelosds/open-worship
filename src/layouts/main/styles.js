import styled from 'styled-components';

export const MainLayout = styled.main`
  background-color: rgb(var(--background));
  color: rgb(var(--text));
  display: grid;
  font-family: 'Quicksand', serif;
  grid-gap: 32px;
  grid-template-columns: 80px 1fr;
  grid-template-rows: 80px 1fr;
  height: 100vh;
  overflow-x: auto;
  padding: 32px;
  width: 100vw;
`;
