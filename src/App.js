import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';


function App() {
  const [songs, setSongs] = useState([]);

  useEffect(async () => {

  });
  return (
    <>
      <Header />
      <Home />
    </>
  );
}

export default App;
