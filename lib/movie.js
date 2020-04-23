import fetch from 'isomorphic-unfetch';

const API_KEY = 'apikey=a3b493e5';

export async function getMovieData(title, year, type) {
  const res = await fetch(
    `http://www.omdbapi.com/?t=${title}&y=${year}&type=${type}&${API_KEY}`
  );
  const json = await res.json();
  return {
    data: json,
  };
}
