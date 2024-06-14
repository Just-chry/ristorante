'use client';
import {usePathname} from "next/navigation";
import classes from "./main-footer.module.css";

export default function MainFooter() {
    const path = usePathname();

    return (
        <>
        <div>
            <head>
                <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
                <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
            </head>
        </div>
    <footer className={classes.footer}>
            <div className={classes.footerContent}></div>
            <ul className={classes.socialIcon}>
                <li className={classes.socialIcon}><a className={classes.socialIconLink} href="#">
                    <ion-icon name="logo-facebook"></ion-icon>
                </a></li>
                <li className={classes.socialIcon}><a className={classes.socialIconLink} href="#">
                    <ion-icon name="logo-twitter"></ion-icon>
                </a></li>
                <li className={classes.socialIcon}><a className={classes.socialIconLink} href="#">
                    <ion-icon name="logo-linkedin"></ion-icon>
                </a></li>
                <li className={classes.socialIcon}><a className={classes.socialIconLink} href="#">
                    <ion-icon name="logo-instagram"></ion-icon>
                </a></li>
            </ul>
            <ul className={classes.menu}>
                <li className={classes.menuItem}><a className={classes.menuLink} href="#">Home</a></li>
                <li className={classes.menuItem}><a className={classes.menuLink}  href="#">About</a></li>
                <li className={classes.menuItem}><a className={classes.menuLink} href="#">Services</a></li>
                <li className={classes.menuItem}><a className={classes.menuLink}  href="#">Team</a></li>
                <li className={classes.menuItem}><a className={classes.menuLink} href="#">Contact</a></li>

            </ul>
            <p>&copy;2021 Nadine Coelho | All Rights Reserved</p>
        </footer>
        </>
    )
        ;
}