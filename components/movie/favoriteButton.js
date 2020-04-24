import Styles from '../../styles/movie.module.css';
import { useToasts } from 'react-toast-notifications';

export default function FavoriteButton({ handleFavoriteButton, movieTitle }) {
  const { addToast } = useToasts();
  const handleClick = () => {
    handleFavoriteButton();
    addToast(`${movieTitle} successfully added to your favorites.`, {
      appearance: 'success',
      autoDismiss: true,
    });
  };
  return (
    <button className={`${Styles.addToFavorites} button`} onClick={handleClick}>
      <p>Add to Favorites</p>
      <img src="/star-fill.svg" alt="star" />
    </button>
  );
}
