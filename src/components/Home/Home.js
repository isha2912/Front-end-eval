/* eslint-disable react/prop-types */
import React from 'react';
import Card from '../Card/Card';
import './Home.scss';

const Home = (({
  isSynced, handleClick, songs, genreSongs, handleToggle, isToggled,
}) => {
  if (!isSynced) {
    return (
      <div className="wait">
        <div className="temp2"> :((</div>
        <div className="temp1"> Seems a bit empty here</div>
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
          { songs.map((eachSong, i) => <Card key={eachSong.id} eachSong={eachSong} index={i} />)}
        </div>
      </div>

    );
  }
  return (
    <div className="main-container">
      <h1> Genre</h1>
      <button type="button" onClick={handleToggle}> toggle</button>
      <div>
        {Object.keys(genreSongs).map((eachGenre) => (
          <div key={eachGenre} className="row">
            <>
              <h1>
                {eachGenre}
              </h1>
              <img src="./assets/genre-bollywood.png" alt="genre" />
              {' '}

            </>
            <div className="home-container">
              {genreSongs[eachGenre].map((eachSong, i) => (
                <Card
                  key={eachSong.id}
                  eachSong={eachSong}
                  index={i}
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
//   genreSongs: PropTypes.shape().isRequired,
//   isToggled: PropTypes.number.isRequired,
//   handleToggle: PropTypes.func.isRequired,

// };
