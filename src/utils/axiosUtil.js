import axios from 'axios';
import { token } from '../../Token';

const getSongs = (async () => {
  const responseSongs = await axios.get('https://api.github.com/user', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
});
