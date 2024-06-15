import classes from "./meals-items.module.css";
import Image from "next/image";
import Link from "next/link";

export default function MealsItems({title, slug, image, summary, creator}) {
    return (
        <article className={classes.meal}>
            <header>
                <div className={classes.image}>
                    <Image src={image} alt={title} fill></Image>
                </div>
                <div className={classes.headerText}>
                    <h2>{title}</h2>
                    <p>{creator}</p>
                </div>
            </header>
            <div className={classes.content}>
                <p className={classes.summary}>
                    {summary}
                </p>
                <div className={classes.actions}>
                    <button>ALLERGENI</button>
                </div>
            </div>
        </article>
    );
}