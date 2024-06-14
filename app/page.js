'use client'
import classes from "./page.module.css";
import {useEffect} from 'react'
import Link from "next/link";
import imgGrill from "@/assets/meatgrill.jpg"
import imgRow1 from "@/assets/row1.jpg"
import imgRow2 from "@/assets/row2.jpg"
import imgRow3 from "@/assets/row3.jpg"
import Image from "next/image";


export default function Home() {
    useEffect(() => {
        document.body.classList.add('background');

        // unmount action
        return () => document.body.classList.remove('background');
    }, [])
    return (
        <>

            <header className={classes.header}></header>

            <main className={classes.main}>

                <div className={classes.hero}>
                    <h1 className={classes.sign}>HAPPY DAYS</h1>
                    <p>
                        VERY PROFESSIONAL!
                    </p>
                    <div className={classes.cta}>
                        <Link href="/menu">LOOK MENU</Link>
                    </div>

                </div>

            </main>
            <div className={classes.container}>

                <div className={classes.containerText}>
                    <div className={classes.containerHeader}>
                        <h2 className={classes.headerUp}>Nice Restaurant</h2>
                        <h1 className={classes.headerDown}>Welcome</h1>
                    </div>
                    Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est.
                    Sed fringilla, nunc sed imperdiet lacinia, nisl ante egestas mi, ac facilisis ligula sem id neque.
                </div>
                <div className={classes.imageContainer}>
                    <Image className={classes.image} src={imgGrill}></Image></div>
            </div>


            <div className={classes.container2}>
                <div className={classes.containerText}>
                    <div className={classes.containerHeader}>
                        <h2 className={classes.headerUp}>Discover</h2>
                        <h1 className={classes.headerDown}>Nice Restaurant</h1>
                    </div>
                </div>
            </div>
            <div className={classes.divImageRow}>
                <div className={classes.smallImgContainer}>
                    <div className={classes.imageContainerRow}>
                        <Image className={classes.imageRow} src={imgRow1}></Image>
                    </div>
                        <h3 className={classes.smallHeader}>NICE PLACE </h3>
                    <p className={classes.imageRowText}>
                        Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est.
                    </p>
                </div>
                <div className={classes.smallImgContainer}>
                    <div className={classes.imageContainerRow}>
                        <Image className={classes.imageRow} src={imgRow2}></Image></div>
                        <h3 className={classes.smallHeader}>NICE FOOD</h3>
                    <p className={classes.imageRowText}>
                        Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est.
                    </p>
                </div>
                <div className={classes.smallImgContainer}>
                    <div className={classes.imageContainerRow}>
                        <Image className={classes.imageRow} src={imgRow3}></Image></div>
                        <h3 className={classes.smallHeader}>NICE DESSERT</h3>
                    <p className={classes.imageRowText}>
                        Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est.
                    </p>
                </div>
            </div>


        </>
    );
}



