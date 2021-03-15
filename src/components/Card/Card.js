import PropTypes from 'prop-types';
import React from 'react';
import Like from '../Like/Like';
import './Card.scss';

const Card = (({ eachSong }) => (

  <div className="card">
    <img className="song-image" src={eachSong.albumArtUrl} alt="img" />
    <div className="container-top">
      <div className="container-bottom">
        <div className="song-name">
          {eachSong.name}
          {' '}
        </div>
        <div><b>{eachSong.artist.name}</b></div>
      </div>
      <Like eachSong={eachSong} />
    </div>
  </div>
));

export default Card;

Card.propTypes = {
  eachSong: PropTypes.shape({
    albumArtUrl: PropTypes.string.isRequired,
    artist: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    name: PropTypes.string.isRequired,

  }).isRequired,

};
