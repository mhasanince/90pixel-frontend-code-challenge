import Styles from '../../styles/movie.module.css';

export default function Title({ movieData }) {
  return (
    <div className={Styles.titleWrapper}>
      <div className={Styles.title}>
        <h1>{movieData.Title}</h1>
        <div className={Styles.subDetails}>
          <p>{movieData.Year}</p>
          <p>{movieData.Runtime}</p>
          <p>{movieData.Genre}</p>
          <p>{movieData.Type}</p>
        </div>
      </div>
      <div className={Styles.imdbRating}>
        <h3>{movieData.imdbRating} / 10</h3>
        <p>{movieData.imdbVotes}</p>
      </div>
    </div>
  );
}
