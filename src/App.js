import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header'
import Users from './containers/Users';

function App() {
  useEffect(() => {

  }, [])
  return (
      <>
      <Header />
      <Users />
      </>
  );
}

export default App;
