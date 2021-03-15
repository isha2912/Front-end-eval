import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import getData from './utils/axiosUtil';
import groupData from './utils/groupByGenre';

function App() {
  const [isSynced, setIsSynced] = useState(false);
  const [songs, setSongs] = useState([]);
  const [genreSongs, setGenreSongs] = useState({});
  const [isToggled, setIsToggled] = useState(false);

  useEffect(async () => {
    const data = await getData.getSongs();
    setSongs(data.data);
  }, [isSynced]);

  const handleClick = (() => {
    setIsSynced(true);
  });
  const handleToggle = (() => {
    const toggleVal = isToggled;
    setIsToggled(!toggleVal);
    const songArray = songs;
    const groupedSongs = groupData.groupByGenre(songArray);
    setGenreSongs(groupedSongs);
  });
  return (
    <>

      <Header />

      <Home
        isSynced={isSynced}
        handleClick={handleClick}
        songs={songs}
        handleToggle={handleToggle}
        genreSongs={genreSongs}
        isToggled={isToggled}
      />

    </>
  );
}

export default App;
