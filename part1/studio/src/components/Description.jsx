import styles from "./Description.module.css";
import React from "react";

const RecipeAuthor = () => {
    let authorLink = "https://themodernnonna.com/rice-pudding/";
    let authorPhoto = "https://themodernnonna.com/wp-content/uploads/2023/06/the_modern_nonna-150x150.jpeg";
    let authorName = "Sneji";

    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = "Rice Pudding" className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>The Modern Nonna Rice Pudding Recipe </a> 
           </div>
        </div>
     );
};

class RecipeDescription extends React.Component {
    render() {
    <div> 
        <div>
           <h1>Rice Pudding</h1>
           <p>
            <ol>
                <li>Rinse rice. Bring water to boil, add rice, and reduce heat to low.</li>
                <li>Remove from heat once water has fully absorbed into rice.</li>
                <li>In separate pot, add milk, sugar, and cinnamon stick. Simmer until sugar is dissolved.</li>
                <li>Add cooked rice and stir up to ten minutes.</li>
                <li>Stir in vanilla.</li>
            </ol>
           </p>
        </div>
        <RecipeAuthor />
     </div> 
    }
};

export {RecipeDescription, RecipeAuthor};