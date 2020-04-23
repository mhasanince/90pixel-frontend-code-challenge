import Styles from '../../styles/movie.module.css';

export default function Content({ movieData }) {
  return (
    <div className={Styles.wrapper}>
      <div className={Styles.content}>
        <p className={Styles.plot}>{movieData.Plot}</p>
        <p>
          <span>Creators:</span> {movieData.Writer}
        </p>
        <p>
          <span>Stars:</span> {movieData.Actors}
        </p>
        <p className={Styles.awards}>
          <span>Awards:</span> {movieData.Awards}
        </p>
      </div>
    </div>
  );
}
