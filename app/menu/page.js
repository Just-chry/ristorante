import classes from "./page.module.css";
import Image from "next/image";
import imgMenu from '@/assets/sala1.jpg'
import MealsGrid from "@/Components/meals/meals-grid";
import {getMeals} from "@/lib/meals";

export default function MealsPage() {
    const meals = getMeals();
    return (
        <>
            <div className={classes.big}>
                <div className={classes.sala}>
                    <Image className={classes.salaImage} src={imgMenu} alt="chef" layout="fill" objectFit="cover"/>
                    <h1 className={classes.sign}>MENU</h1>
                </div>
                <main className={classes.main}>
                    <MealsGrid meals={meals}></MealsGrid>
                </main>
            </div>
        </>
    );
}
