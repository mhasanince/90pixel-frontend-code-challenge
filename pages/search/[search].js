import Link from 'next/link';
import { getMoviesData } from '../../lib/movies';
import Layout from '../../components/layout';

export default function Search({ movies, error }) {
  return (
    <Layout>
      <div>
        <h2>Seach Result</h2>
        <ul>
          {movies.map((movie) => {
            return (
              <li key={movie.imdbID}>
                <Link href="/">
                  <a>{movie.Title}</a>
                </Link>
              </li>
            );
          })}
        </ul>
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
