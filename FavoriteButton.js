function FavoriteButton({ image, favorites, setFavorites }) {

  const addFavorite = () => {

    setFavorites([...favorites, image]);

    alert("Added To Favorites");
  };

  return (
    <button onClick={addFavorite}>
      Add Favorite
    </button>
  );
}

export default FavoriteButton;