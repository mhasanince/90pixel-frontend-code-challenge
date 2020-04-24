import { getMovieData } from '../../lib/movie';
import { saveLocal } from '../../helpers/helpers';
import Layout from '../../components/layout';
import Styles from '../../styles/movie.module.css';
import Title from '../../components/movie/title';
import Content from '../../components/movie/content';
import Ratings from '../../components/movie/ratings';

export default function Movie({ movieData }) {
  let content;
  if (movieData.Response === 'True') {
    content = (
      <div className={Styles.movie}>
        <div className={Styles.poster}>
          <img src={movieData.Poster} alt={movieData.Title} />
        </div>
        <div className={Styles.details}>
          <Title movieData={movieData} />
          <Content movieData={movieData} />
          <Ratings movieData={movieData} />
          <button
            className={Styles.addToFavorites}
            onClick={() => saveLocal(movieData)}
          >
            <p>Add to Favorites</p>
            <img src="/star-fill.svg" alt="star" />
          </button>
        </div>
      </div>
    );
  } else {
    content = (
      <div>
        <h1>{movieData.Error}</h1>
      </div>
    );
  }
  return <Layout>{content}</Layout>;
}

export async function getServerSideProps({ params }) {
  const query = params.title.split('_');
  const title = query[0];
  const year = query[1];
  const type = query[2];
  const movie = await getMovieData(title, year, type);
  return {
    props: {
      movieData: movie.data,
    },
  };
}
