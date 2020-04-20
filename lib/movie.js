import Axios from 'axios';

const API_KEY = 'apikey=a3b493e5';

export async function getMovieData(title) {
  let res = await Axios.get(`http://www.omdbapi.com/?t=${title}&${API_KEY}`);
  return {
    data: res.data,
  };
}
