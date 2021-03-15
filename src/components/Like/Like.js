/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import getData from '../../utils/axiosUtil';

const Like = (({ eachSong }) => {
  const [likeData, setLikeData] = useState({});
  useEffect(async () => {
    const like = await getData.getLikes(eachSong.id);
    setLikeData(like.data);
  });

  return (
    <button className="hear-button" type="button">
      <img src="./assets/heart-gray.svg" alt="heart" />
      {likeData.count}
    </button>
  );
}
);
export default Like;
