import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import getData from './utils/axiosUtil';

function App() {
  // const [songs, setSongs] = useState([]);
  const [isSynced, setIsSynced] = useState(false);
  const [songs, setSongs] = useState([]);

  useEffect(async () => {
    const data = await getData.getSongs();
    console.log(data.data);
    setSongs(data.data);
  }, [isSynced]);

  const handleClick = (() => {
    setIsSynced(true);
  });
  return (
    <>

      <Header />

      <Home isSynced={isSynced} handleClick={handleClick} songs={songs} />

    </>
  );
}

export default App;
