/* eslint-disable react/prop-types */
import React from 'react';
import Like from '../Like/Like';
import './Card.scss';

const Card = (({ eachSong }) => (

  <div className="card">
    <img className="song-image" src={eachSong.albumArtUrl} alt="img" />
    <div className="container-top">
      <div className="container-bottom">
        <div>
          {eachSong.name}
          {' '}
        </div>
        <div>{eachSong.artist.name}</div>
      </div>
      <Like eachSong={eachSong} />
    </div>
  </div>
));

export default Card;
