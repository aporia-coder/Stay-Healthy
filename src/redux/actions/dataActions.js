import axios from "axios";
import { SET_LOADING, SET_RECIPES, SET_ERRORS, SET_CALORIES } from "../types";

export const getRecipesAction = (search, cals, diet, recipesPerPage) => (
  dispatch,
) => {
  dispatch({ type: SET_LOADING });
  axios
    .get(
      `https://api.edamam.com/search?q=${search}&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_KEY}&from=0&to=50&calories=2-${cals}&health=${diet}`,
    )
    .then((res) => {
      const newData = res.data.hits.filter((recipe, i) => {
        return recipe.recipe.calories.toFixed(0) <= cals;
      });
      dispatch({ type: SET_RECIPES, payload: newData });
    })
    .catch((err) => {
      dispatch({ type: SET_ERRORS });
    });
};

export const calculateCaloriesAction = (bmr, activityLevel) => (dispatch) => {
  if (activityLevel === "Sedentary") {
    dispatch({ type: SET_CALORIES, payload: bmr * 1.2 });
  } else if (activityLevel === "Light") {
    dispatch({ type: SET_CALORIES, payload: bmr * 1.375 });
  } else if (activityLevel === "Moderate") {
    dispatch({ type: SET_CALORIES, payload: bmr * 1.55 });
  } else if (activityLevel === "Active") {
    dispatch({ type: SET_CALORIES, payload: bmr * 1.725 });
  } else if (activityLevel === "Very Active") {
    dispatch({ type: SET_CALORIES, payload: bmr * 1.9 });
  }
};
