import styles from "./Ingredients.module.css";

export default function RecipeIngredients() {
    let ingredients = ["1 cup rice", "2 cups water", "2 cups milk", "1/2 cup sugar", "cinnamon stick", "1tsp vanilla extract"];

    return (
        <div>
            <h3>Recipe Ingredients</h3>
            <ul className = {styles.ingredientList}>
                <li>{ingredients[0]}</li>
                <li>{ingredients[1]}</li>
                <li>{ingredients[2]}</li>
                <li>{ingredients[3]}</li>
                <li>{ingredients[4]}</li>
            </ul>
        </div>
    )
}