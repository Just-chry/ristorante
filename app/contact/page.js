'use client';
import classes from "./page.module.css";
import Image from "next/image";
import imgMenu from '@/assets/contactbg.jpg'



export default function ContactPage() {
    return (
        <>
            <div className={classes.imgCont}>
                <Image className={classes.mainImage} src={imgMenu} alt="chef" layout="fill" objectFit="cover"/>
                <h1 className={classes.sign}>contact us</h1>
            </div>
            <div className={classes.bigContainer}>
                <div className={classes.container}>
                    <div className={classes.text}>
                        SEND US A MESSAGE
                    </div>
                    <form className={classes.form} action="#">
                        <div className={classes.formRow}>
                            <div className={classes.inputContainer}>
                                <input type="text" required/>
                                <div className={classes.underline}></div>
                                <label htmlFor="">First Name</label>
                            </div>
                            <div className={classes.inputContainer}>
                                <input type="text" required/>
                                <div className={classes.underline}></div>
                                <label htmlFor="">Last Name</label>
                            </div>
                            <div className={classes.inputContainer}>
                                <input type="text" required/>
                                <div className={classes.underline}></div>
                                <label htmlFor="">Phone</label>
                            </div>
                        </div>
                        <div className={classes.formRowText}>
                            <div className={classes.inputContainerText}>
                                <textarea className={classes.textContact} required/>
                                <div className={classes.underline}></div>
                                <label htmlFor="">Message</label>
                            </div>
                        <div className={classes.cta}>
                            <button className={classes.input}>SUBMIT</button>
                        </div>
                        </div>

                    </form>
                </div>
            </div>


        </>
    );
}
