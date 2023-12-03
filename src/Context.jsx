import axios from "axios";
import React, { useContext, useEffect, useState } from "react";

export const AppContext = React.createContext();

export function useGlobalContext() {
  return useContext(AppContext);
}

const searchMealsUrl =
  `https://` + `www.themealdb.com/api/json/v1/1/search.php?s=`;
const randomMealUrl = `https://` + `www.themealdb.com/api/json/v1/1/random.php`;
// console.log(searchMealsUrl, randomMealUrl);

export function AppProvider({ children }) {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState(``);
  const [showModal, setShowModal] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState();
  const [favorites, setFavorites] = useState(getLocalFavorites());

  async function fetchData() {
    try {
      const response = await fetch(`https://randomuser.me/api/`);
      const data = await response.json();
      //   console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchMeal(url) {
    setLoading(true);
    try {
      const response = await axios(url);
      //   console.log(response.data);
      setMeals(response.data.meals);
    } catch (error) {
      console.log(error.response);
    }
    setLoading(false);
  }

  function fetchRandomMeal() {
    fetchMeal(randomMealUrl);
  }

  function selectMeal(selectedId) {
    // console.log(selectedId);
    const meal = meals.find(function (value) {
      // console.log(value);
      return value.idMeal === selectedId;
    });
    // console.log(meal);

    setSelectedMeal(meal);
    setShowModal(true);
  }

  function favoritesSelectMeal(selectedId) {
    const meal = favorites.find(function (value) {
      return value.idMeal === selectedId;
    });

    setSelectedMeal(meal);
    setShowModal(true);
  }

  function selectMeal2(selectedId, mealsOrFavorites) {
    const meal = (mealsOrFavorites === `meals` ? meals : favorites).find(
      function (value) {
        return value.idMeal === selectedId;
      }
    );

    setSelectedMeal(meal);
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
  }

  function addToFavorites(mealId) {
    if (
      favorites.find(function (value) {
        return value.idMeal === mealId;
      })
    ) {
      return;
    }

    const newFavorites = meals.find(function (value) {
      return value.idMeal === mealId;
    });

    // console.log([...favorites, newFavorites]);
    setFavorites([...favorites, newFavorites]);
    updateLocalFavorites([...favorites, newFavorites]);
  }

  function removeFromFavorites(mealId) {
    const newFavorites = favorites.filter(function (value) {
      return value.idMeal !== mealId;
    });
    // console.log(newFavorites);
    setFavorites(newFavorites);
    updateLocalFavorites(newFavorites);
  }

  function updateLocalFavorites(newValue) {
    localStorage.setItem(`favorites`, JSON.stringify(newValue));
  }

  function getLocalFavorites() {
    // console.log(JSON.parse(localStorage.getItem(`favorites`)));

    const storedFavorites = JSON.parse(localStorage.getItem(`favorites`));
    if (!storedFavorites) {
      return [];
    }
    return JSON.parse(localStorage.getItem(`favorites`));
  }
  // getLocalFavorites();

  useEffect(function () {
    fetchMeal(searchMealsUrl + searchTerm);
  }, []);

  useEffect(
    function () {
      // console.log(`fetching data...`);

      // fetchData();

      if (!searchTerm) {
        return;
      }

      fetchMeal(searchMealsUrl + searchTerm);
    },
    [searchTerm]
  );

  return (
    <AppContext.Provider
      value={{
        meals,
        loading,
        setSearchTerm,
        fetchRandomMeal,
        showModal,
        selectMeal,
        selectedMeal,
        closeModal,
        addToFavorites,
        removeFromFavorites,
        favorites,
        favoritesSelectMeal,
        selectMeal2,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
// export { AppContext, AppProvider };
