import React from 'react';

import Global from './styles/Global'
import Header from './components/Header';
import Board from './components/Board';

function App() {
  return (
    <>
      <Global/>
      <Header/>
      <Board />
    </>
  );
}

export default App;
