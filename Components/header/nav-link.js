import { useState, useEffect } from 'react';
import Link from "next/link";
import classes from "@/Components/header/nav-link.module.css";
import {usePathname} from "next/navigation";

export default function Navlink({href, children}) {
    const [color, setColor] = useState('white');
    const path = usePathname();

    useEffect(() => {
        const scrollFunction = () => {
            if (window.scrollY > 50) {
                setColor('black');
            } else {
                setColor('white');
            }
        }

        window.addEventListener('scroll', scrollFunction);

        return () => window.removeEventListener('scroll', scrollFunction);
    }, []);

    return (
        <Link className={path.startsWith(href) ? `${classes.link} ${classes.active}` : classes.link }
              style={{color: color}}
              href={href}>{children}</Link>
    );
}