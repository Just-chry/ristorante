import Link from "next/link";

export default function MealPostPage({params}){
    return(
        <main>
            <h1>Meals</h1>
            <p>
                {params.slug}
            </p>
            <p>
                <Link href="/">HOME</Link>
            </p>
        </main>
    );
}