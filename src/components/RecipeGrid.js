import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import uuid from "react-uuid";

// Types
import { SET_CALORIES, SET_MEAT } from "../redux/types";

// Images
import Spinner from "../assets/img/icons/spinner.svg";

// Components
import Recipe from "./Recipe";

// MUI
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button";
import Pagination from "@material-ui/lab/Pagination";

// Actions
import { getRecipesAction } from "../redux/actions/dataActions";

const RecipeGrid = () => {
  const dispatch = useDispatch();
  const { recipes, calories, loading, error, meatPreference } = useSelector(
    (state) => state,
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(5);
  const [recipesPerPage] = useState(10);
  const initialRequest = "curry";
  const initialCalories = 2000;

  // Pagination
  let lastRecipeIndex = currentPage * recipesPerPage;
  let firstRecipeIndex = lastRecipeIndex - recipesPerPage;
  let currentRecipes = recipes.slice(firstRecipeIndex, lastRecipeIndex);

  useEffect(() => {
    dispatch(getRecipesAction(initialRequest, initialCalories, "alcohol-free"));
  }, [dispatch]);

  useEffect(() => {
    setCurrentPage(1);
    setNumberOfPages(Math.ceil(recipes.length / recipesPerPage));
  }, [recipes, recipesPerPage]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getRecipesAction(searchQuery, calories, meatPreference));
  };

  const handlePagination = (event, value) => {
    setNumberOfPages(Math.ceil(recipes.length / recipesPerPage));
    setCurrentPage(value);
  };

  return (
    <>
      <div className="m-y-3">
        <form className="container-diet flex-row" onSubmit={handleSubmit}>
          <div className="m-y-1">
            <InputLabel>Diet</InputLabel>
            <Select
              native
              label="Diet"
              value={meatPreference}
              onChange={(e) =>
                dispatch({ type: SET_MEAT, payload: e.target.value })
              }
            >
              <option value="vegan">Vegan</option>
              <option value="vegetarian">Vegetarian</option>
              <option value="alcohol-free">Omnivore</option>
            </Select>
          </div>
          <TextField
            className="m-y-1"
            label="Search Recipes"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="m-y-1">
            <p className="p-x-2">Calories</p>
            <Slider
              defaultValue={calories}
              min={2}
              max={4000}
              aria-labelledby="discrete-slider-small-steps"
              valueLabelDisplay="auto"
              onChangeCommitted={(event, value) =>
                dispatch({ type: SET_CALORIES, payload: value })
              }
            />
          </div>
          <Button
            color="primary"
            variant="contained"
            type="submit"
            disabled={loading ? true : false}
            className="btn-search"
          >
            search
          </Button>
        </form>
        {error && <h5 className="center">{error}</h5>}
        <div className="flex m-y-2">
          <Pagination
            count={numberOfPages}
            color="primary"
            onChange={handlePagination}
            disabled={loading ? true : false}
          />
        </div>
      </div>
      <>
        {loading ? (
          <div className="flex">
            <img src={Spinner} alt="Loading Spinner" className="center" />
          </div>
        ) : (
          <>
            <ul className="recipe-grid container-recipe m-y-2">
              {currentRecipes.map((recipe, i) => (
                <Recipe
                  recipeName={recipe.recipe.label}
                  calories={`Calories: ${recipe.recipe.calories.toFixed(0)}`}
                  recipeImage={recipe.recipe.image}
                  healthLabels={recipe.recipe.healthLabels}
                  ingredients={recipe.recipe.ingredients}
                  time={recipe.recipe.totalTime}
                  key={uuid()}
                />
              ))}
            </ul>
          </>
        )}
      </>
    </>
  );
};

export default RecipeGrid;
