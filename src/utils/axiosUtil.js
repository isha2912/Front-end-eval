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

export default getSongs;
