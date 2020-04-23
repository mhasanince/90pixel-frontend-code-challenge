import Styles from '../../styles/movie.module.css';

export default function Ratings({ movieData }) {
  const ratings = movieData.Ratings.map((rating, idx) => {
    return (
      <div className={Styles.rating} key={idx}>
        <p>{rating.Source}</p>
        <p>{rating.Value}</p>
      </div>
    );
  });
  return (
    <div className={Styles.wrapper}>
      <div className={Styles.ratings}>{ratings}</div>
    </div>
  );
}
