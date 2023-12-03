import React from "react";

function FavoritesCards({
  id,
  imageUrl,
  removeFromFavorites,
  favoritesSelectMeal,
  selectMeal2,
}) {
  function handleRemoveFavorites() {
    removeFromFavorites(id);
  }

  function handleSelectMeal() {
    // favoritesSelectMeal(id);
    selectMeal2(id, `favorites`);
  }

  return (
    <div className="favorite-item">
      <img
        src={imageUrl}
        className="favorites-img img"
        onClick={handleSelectMeal}
      ></img>
      <button className="remove-btn" onClick={handleRemoveFavorites}>
        Remove
      </button>
    </div>
  );
}

export default FavoritesCards;
