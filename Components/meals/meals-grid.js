import classes from "./meals-grid.module.css";
import MealsItems from "@/Components/meals/meals-item";
export default function MealsGrid({meals}) {
    return (
        <>
            <ul className={classes.meals}>
                {meals.map(meal => (
                    <li key={meal.id}>
                    <MealsItems{...meal} />
                    </li>

                ))}
            </ul>
        </>
    );
}