'use client';
import classes from "./page.module.css";
import Image from "next/image";
import imgEntrata from '@/public/images/Sala2.jpg';


export default function ContactPage() {
    return (
    <main className={classes.main}>
        <div className={classes.imgCont}>
        <Image className={classes.mainImage} src={imgEntrata} alt="chef" layout="fill" objectFit="cover"/>
                <h1 className={classes.sign}>CONTATTACI</h1>
            </div>
                <div className={classes.address}>
                    <h3>Indirizzo:</h3>
                    <p>Via Marghera 24, 20149 Milano MI</p>
                </div>
            <div className={classes.container}>
                <div className={classes.maps}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44770.276275882126!2d9.110761753436561!3d45.46693796939823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c164f4d7e123%3A0x846662cd6bbde5e1!2sHappy%20Days!5e0!3m2!1sen!2slt!4v1718455910417!5m2!1sen!2slt"
                        width="750"
                        height="600"
                        style={{border: 0}}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
                <div className={classes.contactInfo}>
                    <div className={classes.infoContainer}>
                        <ul className={classes.ul}>
                            <li className={classes.li}>
                                <h2 className={classes.h2}>TELEFONO</h2>
                                <div className={classes.infoContent}>
                                    <p className={classes.p}>
                                        <div>Tel. 02 481 7075</div>
                                        <div>Tel. 02 439 82643</div>
                                    </p>
                                </div>
                            </li>
                            <li className={classes.li}>
                                <h2 className={classes.h2}>INDIRIZZO</h2>
                                <div className={classes.infoContent}>
                                    <p className={classes.p}>
                                        <div>Via Marghera, 24</div>
                                        <div>20149 Milano MI</div>
                                    </p>
                                </div>
                            </li>
                            <li className={classes.li}>
                                <h2 className={classes.h2}>ORARI</h2>
                                <div className={classes.infoContent}>
                                    <p className={classes.p}>
                                        <div>Lunedì 12 – 14:30, Chiuso </div>
                                        <div>Martedì 12 – 14:30, 19 – 23</div>
                                        <div>Mercoledì 12 – 14:30, 19 – 23</div>
                                        <div>Giovedì 12 – 14:30, 19 – 23</div>
                                        <div>Venerdì 12 – 14:30, 19 – 23</div>
                                        <div>Sabato 12 – 14:30, 19 – 23</div>
                                        <div>Domenica 12 – 14:30, 19 – 23</div>
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    );
}
