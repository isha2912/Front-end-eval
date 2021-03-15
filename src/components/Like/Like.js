import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import getData from '../../utils/axiosUtil';

const Like = (({ eachSong }) => {
  const [likeData, setLikeData] = useState({});
  let isClicked = 0;
  let src = '';
  if (!isClicked) { src = './assets/heart-gray.svg'; }
  useEffect(async () => {
    const like = await getData.getLikes(eachSong.id);
    setLikeData(like.data);
  }, [likeData]);
  const handleLike = (async () => {
    isClicked = !isClicked;
    if (isClicked) {
      src = './assets/heart-red.svg';
    }
    const isLiked = likeData.like;
    const newLike = {
      like: (!isLiked),
    };
    const updateLike = await getData.updateLike(eachSong.id, newLike);
    setLikeData(updateLike.data);
    isClicked = 0;
  });

  return (
    <button type="button" onClick={handleLike}>
      <img src={src} alt="heart" />
      {likeData.count}
    </button>
  );
}
);
export default Like;
Like.propTypes = {
  eachSong: PropTypes.shape({
    id: PropTypes.string.isRequired,

  }).isRequired,
};
