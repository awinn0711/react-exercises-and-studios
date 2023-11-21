import { useState } from 'react';

const RecipeAuthor = () => {
   let authorLink = "https://www.maangchi.com/recipe/tongbaechu-kimchi";
   let authorPhoto = "https://www.maangchi.com/wp-content/themes/maangchi4/img/promo/maangchi-real-korean-cooking-200.jpg";
   let authorName = "Maangchi";

   return (
      <div>
         <img src={authorPhoto} alt = "" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ["Napa Cabbage", "Korean Radish", "Carrot", "Garlic", "Ginger"];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1>Napa Cabbage Kimchi</h1>
            <p>This traditional kimchi is a staple of Korean cuisine and culture.</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://www.maangchi.com/wp-content/uploads/2014/06/whole-cabbage-kimchi-590x466.jpg" alt="Finished kimchi" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}
