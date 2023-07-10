import React from 'react';
import Header from './components/Header';
import routes from './config/routes';

function App() {
  return (
    <>
      <Header />
        { routes }
    </>
  );
};

export default App;