/* eslint-disable react/prop-types */
import React from 'react';
import Card from '../Card/Card';
import './Home.scss';

const Home = (({
  // eslint-disable-next-line no-unused-vars
  isSynced, handleClick, songs, genreSongs, handleToggle, isToggled,
}) => {
  if (!isSynced) {
    return (
      <div className="wait">
        <div> :((</div>
        <div> Seems a bit empty here</div>
        <button className="temp" type="button" onClick={handleClick}>Sync </button>
      </div>
    );
  }
  if (isSynced && !isToggled) {
    return (
      <div className="main-container">
        <h1>All songs</h1>
        <button type="button" onClick={handleToggle}> toggle</button>
        <div className="home-container">
          { songs.map((eachSong) => <Card key={eachSong.id} eachSong={eachSong} />)}
        </div>
      </div>

    );
  }
  return (
    <div className="main-container">
      <h1> Genre</h1>
      <div>
        {Object.keys(genreSongs).map((eachGenre) => (
          <div key={eachGenre} className="row">
            <h1>{eachGenre}</h1>
            <div className="home-container">
              {genreSongs[eachGenre].map((eachSong) => (
                <Card
                  key={eachSong.id}
                  eachSong={eachSong}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
});
export default Home;

// Home.propTypes = {
//   songs: PropTypes.arrayOf(PropTypes.shape().isRequired).isRequired,
//   handleClick: PropTypes.func.isRequired,
//   isSynced: PropTypes.bool().isRequired,

// };
