import { removeFromFavorites } from '../../helpers/helpers';
import { useToasts } from 'react-toast-notifications';
import Styles from '../../styles/favorites.module.css';

export default function RemoveFavoriteButton({ remove, favorite }) {
  const { addToast } = useToasts();
  const handleClick = () => {
    remove(removeFromFavorites(favorite));
    addToast(`${favorite.title} successfully removed from your favorites.`, {
      appearance: 'error',
      autoDismiss: true,
    });
  };
  return (
    <button
      className={`${Styles.remove} button`}
      onClick={handleClick}
    ></button>
  );
}
