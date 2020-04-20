import Link from 'next/link';
import { getMoviesData } from '../../lib/movies';

export default function Search({ movies }) {
  return (
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
  );
}

export async function getServerSideProps({ params }) {
  const movie = await getMoviesData(params.search);
  return {
    props: {
      movies: movie.data,
    },
  };
}
