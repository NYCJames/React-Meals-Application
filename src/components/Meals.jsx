import React from "react";
import { useGlobalContext } from "../Context";
import MealCards from "./MealCards";

function Meals() {
  const { meals, loading, selectMeal, addToFavorites, selectMeal2 } =
    useGlobalContext();

  //   console.log(meals);

  if (loading === true) {
    return (
      <section className="section">
        <h4>Loading...</h4>
      </section>
    );
  }

  if (meals === null) {
    return (
      <section className="section">
        <h4>No results found, please try again.</h4>
      </section>
    );
  }

  //   console.log(meals);

  return (
    <section className="section-center">
      {/* <h4>test 123</h4> */}
      {meals.map(function (value) {
        const { idMeal: id, strMeal: title, strMealThumb: imageUrl } = value;
        // console.log(value);
        return (
          <MealCards
            key={id}
            id={id}
            title={title}
            imageUrl={imageUrl}
            selectMeal={selectMeal}
            addToFavorites={addToFavorites}
            selectMeal2={selectMeal2}
          ></MealCards>
        );
      })}
    </section>
  );
}

export default Meals;
