import Axios from 'axios';

const API_KEY = 'apikey=a3b493e5';

export async function getMoviesData(search) {
  let res = await Axios.get(`http://www.omdbapi.com/?s=${search}&${API_KEY}`);
  return {
    data: res.data.Search,
  };
}
