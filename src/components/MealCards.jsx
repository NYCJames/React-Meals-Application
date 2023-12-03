import React from "react";

function MealCards({
  id,
  title,
  imageUrl,
  selectMeal,
  addToFavorites,
  selectMeal2,
}) {
  function handleSelectMeal(event) {
    // console.log(event.currentTarget.id);

    // selectMeal(id);
    selectMeal2(id, `meals`);
  }

  function handleFavoriteMeal() {
    addToFavorites(id);
  }

  return (
    <article key={id} id={id} className="single-meal">
      <img
        src={imageUrl}
        className="img"
        // style={{ width: "200px" }}
        onClick={handleSelectMeal}
      ></img>
      <footer>
        <h5 onClick={handleSelectMeal}>{title}</h5>
        <button className="like-btn" onClick={handleFavoriteMeal}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-thumb-up"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#2c3e50"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3" />
          </svg>
        </button>
      </footer>
    </article>
  );
}

export default MealCards;
