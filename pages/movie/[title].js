import { getMovieData } from '../../lib/movie';

export default function Movie({ movieData }) {
  return (
    <div>
      <h2>{movieData.Title}</h2>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const movie = await getMovieData(params.title);
  return {
    props: {
      movieData: movie.data,
    },
  };
}
