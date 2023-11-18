import "./App.css";
import RateARecipe from "./components/RateARecipe.jsx";
import Button from "./components/Button.jsx";
import AuthorInfo from "./components/AuthorInfo.jsx";
import IngredientList from "./components/Ingredients.jsx";
import RecipeImage from "./components/RecipeImage.jsx";
import RecipeName from "./components/RecipeName.jsx";
import SaveButton from "./components/SaveButton.jsx";
import React from "react";


export default function App() {
  return (
    <>
      <RecipeImage />
      <RecipeName />
      <RateARecipe rating={4} />
      <Button saveButton={true} />
      <AuthorInfo />
      <IngredientList />
    </>
  );
};

