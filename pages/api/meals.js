// pages/api/meals.js
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export default async function handler(req, res) {
    const db = await open({
        filename: './meals.db',
        driver: sqlite3.Database
    });

    const type = req.query.type;
    const meals = await db.all('SELECT * FROM meals WHERE type = ?', type);

    res.json(meals);
}