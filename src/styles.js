import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-display: swap;
    font-family: 'Quicksand';
    font-style: normal;
    font-weight: 300;
    src: url('/fonts/quicksand/Quicksand-Light.ttf') format('truetype');
  }

  @font-face {
    font-display: swap;
    font-family: 'Quicksand';
    font-style: normal;
    font-weight: 400;
    src: url('/fonts/quicksand/Quicksand-Regular.ttf') format('truetype');
  }

  @font-face {
    font-display: swap;
    font-family: 'Quicksand';
    font-style: normal;
    font-weight: 500;
    src: url('/fonts/quicksand/Quicksand-Medium.ttf') format('truetype');
  }

  @font-face {
    font-display: swap;
    font-family: 'Quicksand';
    font-style: normal;
    font-weight: 600;
    src: url('/fonts/quicksand/Quicksand-SemiBold.ttf') format('truetype');
  }

  @font-face {
    font-display: swap;
    font-family: 'Quicksand';
    font-style: normal;
    font-weight: 700;
    src: url('/fonts/quicksand/Quicksand-Bold.ttf') format('truetype');
  }

  :root {
    --primary: ${props => props.theme.join(', ')};
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --background: 23, 21, 28;
      --card-background: 35, 31, 42;
      --text: 255, 255, 255;
    }
  }

  @media (prefers-color-scheme: light) {
    :root {
      --background: 248, 249, 252;
      --card-background: 255, 255, 255;
      --text: 0, 0, 0;
    }
  }

  * {
    box-sizing: border-box;
  }

  html {
    font-size: 10px;
  }

  body {
    background-color: rgb(var(--background));
    color: rgb(var(--text));
    font-family: 'Quicksand', serif;
    font-size: 1.6rem;
    margin: 0;
  }
`;
