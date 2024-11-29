import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import ChessBoard from './components/ChessBoard';

const App = () => {
  return (
    <Provider store={store}>
      <ChessBoard />
    </Provider>
  );
};

export default App;
// Esta es una linea escrita desde mi iPhone
