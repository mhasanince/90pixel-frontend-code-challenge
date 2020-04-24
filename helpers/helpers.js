export const saveLocal = (movieData) => {
  let favorites = JSON.parse(localStorage.getItem('favorites'));
  const newFavorite = {
    title: movieData.Title,
    year: movieData.Year,
    type: movieData.Type,
    poster: movieData.Poster,
  };
  if (favorites === null) {
    favorites = [newFavorite];
    window.localStorage.setItem('favorites', JSON.stringify(favorites));
  } else if (
    !favorites.some((favorite) => favorite.title === newFavorite.title)
  ) {
    favorites = [...favorites, newFavorite];
    window.localStorage.setItem('favorites', JSON.stringify(favorites));
  }
};

export const removeFromFavorites = (removed) => {
  let favorites = JSON.parse(localStorage.getItem('favorites'));
  favorites = favorites.filter((favorite) => {
    if (favorite.title !== removed.title) {
      return favorite;
    }
  });
  window.localStorage.setItem('favorites', JSON.stringify(favorites));
  return favorites;
};

export const fillYears = () => {
  let range = Array.from(Array(100).keys());
  let options = range.map((key) => {
    return (
      <option value={1921 + key} key={key}>
        {1921 + key}
      </option>
    );
  });
  return options.reverse();
};
