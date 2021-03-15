import axios from 'axios';
import token from '../Token';

const getSongs = (async () => {
  const responseSongs = await axios.get('/api/records', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return responseSongs.data;
});

const getLikes = (async (id) => {
  const responseLike = await axios.get(`/api/records/${id}/likes`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return responseLike.data;
});

const updateLike = (async (id, responseBody) => {
  const responseLike = await axios.patch(`/api/records/${id}/likes`, responseBody, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return responseLike.data;
});
export default { getSongs, getLikes, updateLike };
