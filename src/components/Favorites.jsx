import React from "react";
import { useGlobalContext } from "../Context";
import FavoritesCards from "./FavoritesCards";

function Favorites() {
  const { removeFromFavorites, favorites, favoritesSelectMeal, selectMeal2 } =
    useGlobalContext();

  return (
    <section className="favorites">
      <div className="favorites-content">
        <h5>Favorites:</h5>
        <div className="favorites-container">
          {favorites.map(function (value) {
            const { idMeal: id, strMealThumb: imageUrl } = value;

            return (
              <FavoritesCards
                key={id}
                id={id}
                imageUrl={imageUrl}
                removeFromFavorites={removeFromFavorites}
                favoritesSelectMeal={favoritesSelectMeal}
                selectMeal2={selectMeal2}
              ></FavoritesCards>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Favorites;
