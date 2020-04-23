import Styles from '../styles/favorites.module.css';

export default function Favorites({ movieData }) {
  return (
    <div className={Styles.favorites}>
      <h3 className={Styles.header}>Favorites</h3>
      <div className={Styles.movies}></div>
    </div>
  );
}
