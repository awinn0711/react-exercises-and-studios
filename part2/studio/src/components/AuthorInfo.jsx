import recipedata from "./recipe.json";
import "./styling.css";

function AuthorInfo() {
  const recipeAuthor = <div>{recipedata[0].author}</div>
  const recipeAuthorImage = <div><img src = {recipedata[0].authorImage} alt = {recipedata[0].author} className="authorImage"/></div>
  const recipeWebsite = <div>{recipedata[0].website}</div>
   return (
   <div>
    {recipeAuthor}
    {recipeAuthorImage}
    {recipeWebsite}
   </div>
   )
 };
 
 export default AuthorInfo;
 
 //import styles.css
 //import json file for author info
 //image, name, website
 //css for styling image
 