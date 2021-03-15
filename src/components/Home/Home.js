/* eslint-disable react/prop-types */
import React from 'react';
import Card from '../Card/Card';
import './Home.scss';

const Home = (({ isSynced, handleClick, songs }) => {
  if (!isSynced) {
    return (
      <div className="wait">
        <div> :((</div>
        <div> Seems a bit empty here</div>
        <button className="temp" type="button" onClick={handleClick}>Sync </button>
      </div>
    );
  }

  return (
    <div className="main-container">
      <h1>All songs</h1>
      <div className="home-container">
        { songs.map((eachSong) => <Card key={eachSong.id} eachSong={eachSong} />)}
      </div>
    </div>

  );
});
export default Home;
