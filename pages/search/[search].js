import Link from 'next/link';
import { getMoviesData } from '../../lib/movies';
import Layout from '../../components/layout';
import Styles from '../../styles/search.module.css';

export default function Search({ movies }) {
  const searchResult = movies.map((movie, idx) => {
    return (
      <div className={Styles.movie} key={idx}>
        <img src={movie.Poster} alt={movie.Title} />
        <Link
          href="/movie/[title]"
          as={`/movie/${movie.Title}_${movie.Year.replace('–', '')}_${
            movie.Type
          }`}
        >
          <a className={Styles.title}>{movie.Title}</a>
        </Link>
        <div className={Styles.subInfo}>
          <p>{movie.Year}</p>
          <p>{movie.Type}</p>
        </div>
      </div>
    );
  });
  return (
    <Layout>
      <div className={Styles.search}>
        <h1>Seach Results</h1>
        <div className={Styles.movies}>{searchResult}</div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ params }) {
  const movies = await getMoviesData(params.search);
  return {
    props: {
      movies: movies.data.Search,
    },
  };
}
