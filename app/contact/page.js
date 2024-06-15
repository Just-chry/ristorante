'use client';
import classes from "./page.module.css";
import Image from "next/image";
import imgEntrata from '@/public/images/Sala2.jpg';
import PhoneIcon from '@/assets/telefono.png'; // Assumi che l'immagine del telefono sia salvata in questa posizione

export default function ContactPage() {
    return (
        <main className={classes.main}>
            <div className={classes.imgCont}>
                <Image className={classes.mainImage} src={imgEntrata} alt="chef" layout="fill" objectFit="cover"/>
                <h1 className={classes.sign}>CONTATTACI</h1>
            </div>
            <div className={classes.containerAddress}>
                <div className={classes.address}>
                    <h3>Indirizzo:</h3>
                    <p>Via Marghera 24, 20149 Milano MI</p>
                </div>
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
                <div className={classes.infoContainer}>
                    <div className={classes.openingHours}>
                        <h2>ORARI DI APERTURA:</h2>
                        <ul>
                            <li>Lunedì 12 – 14:30, chiuso a cena</li>
                            <li>Martedì 12:00 – 14:30, 19 – 24</li>
                            <li>Mercoledì 12 – 14:30, 19 – 24</li>
                            <li>Giovedì 12 – 14:30, 19 – 24</li>
                            <li>Venerdì 12 – 14:30, 19 – 24</li>
                            <li>Sabato 12 – 14:30, 19 – 24</li>
                            <li>Domenica 12 – 14:30, 19 – 24</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div className={classes.phoneNumbers}>
                    <div className={classes.phoneNumber}>
                        <div className={classes.phoneIcon}>
                            <Image src={PhoneIcon} alt="Telefono Icona" width={40} height={40}/>
                        </div>
                        <a href="tel:+39024817075" className={classes.phoneLink}>Tel. 02 481 70 75</a>
                    </div>
                    <div className={classes.phoneNumber}>
                        <div className={classes.phoneIcon}>
                            <Image src={PhoneIcon} alt="Telefono Icona" width={40} height={40}/>
                        </div>
                        <a href="tel:+390243982643" className={classes.phoneLink}>Tel. 02 439 82 643</a>
                    </div>
                </div>
            </div>
        </main>
    );
}
