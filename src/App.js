import React from 'react';

import Routes from './routes';

import * as S from './styles';

function App() {
  return (
    <div>
      <S.GlobalStyle theme={[113, 61, 235]} />
      <Routes />
    </div>
  );
}

export default App;
