import classes from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import imgMenu from '@/assets/maingallery.webp'
import img1 from "/assets/carousel1.webp"
import img2 from "/assets/carousel2.jpg"
import img3 from "/assets/carousel3.jpg"
import img4 from "/assets/carousel4.jpg"


export default function GalleryPage() {
    return (
        <>
            <div className={classes.imgCont}>
                <Image className={classes.mainImage} src={imgMenu} alt="chef" layout="fill" objectFit="cover"/>
                <h1 className={classes.sign}>Gallery</h1>
            </div>
            <div className={classes.bigContainer}>
            <div className={classes.gallery}>
                <Image className={classes.imgCar} src={img1}></Image>
                <Image className={classes.imgCar} src={img2}></Image>
                <Image className={classes.imgCar} src={img3}></Image>
                <Image className={classes.imgCar} src={img4}></Image>
            </div>
            </div>
        </>
    );
}
