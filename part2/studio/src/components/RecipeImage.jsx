import recipedata from "./recipe.json";

function RecipeImage() {
  const image = (
    <img src = {recipedata[0].recipeImage} className="recipeImage"></img>
  )
   return (
    <div>{image}</div>
   )
 }
 
 export default RecipeImage;
 
 //import json file for the data
 //apply css for className recipeImage
 