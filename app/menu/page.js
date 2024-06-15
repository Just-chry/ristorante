'use client';
import { useState, useEffect } from 'react';
import classes from "./page.module.css";
import Image from "next/image";
import imgMenu from '@/assets/sala1.jpg';
import MealsGrid from "@/Components/meals/meals-grid";

export default function MealsPage() {
    const [menu, setMenu] = useState('pizza');
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        fetch(`/api/meals?type=${menu}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setMeals(data))
            .catch(error => {
                console.error('Error fetching meals:', error);
            });
    }, [menu]);

    return (
        <>
            <div className={classes.big}>
                <div className={classes.sala}>
                    <Image className={classes.salaImage} src={imgMenu} alt="chef" layout="fill" objectFit="cover"/>
                    <h1 className={classes.sign}>MENU</h1>
                </div>
                <main className={classes.main}>
                    <div className={classes.typeButtons}>
                    <button className={classes.type} onClick={() => setMenu('pizza')}>Pizza</button>
                    <button className={classes.type} onClick={() => setMenu('italian')}>Italian</button>
                    <button className={classes.type} onClick={() => setMenu('sushi')}>Sushi</button>
                    </div>
                    <MealsGrid meals={meals}></MealsGrid>
                </main>
            </div>
        </>
    );
}
