/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import getData from '../../utils/axiosUtil';

const Like = (({ eachSong }) => {
  const [likeData, setLikeData] = useState({});
  let src = '';
  useEffect(async () => {
    const like = await getData.getLikes(eachSong.id);
    setLikeData(like.data);
  });
  const handleLike = (async () => {
    const isLiked = likeData.like;
    const newLike = {
      like: (!isLiked),
    };
    const updateLike = await getData.updateLike(eachSong.id, newLike);
    setLikeData(updateLike.data);

    if (likeData.like === true) {
      src = './assets/heart-red.svg';
    } else { src = './assets/heart-gray.svg'; }
  });

  return (
    <button className="hear-button" type="button" onClick={handleLike}>
      <img src={src} alt="heart" />
      {likeData.count}
    </button>
  );
}
);
export default Like;
