'use client';
import React, { useEffect, useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import classes from "./main-header.module.css";
import Navlink from "@/Components/header/nav-link";
import logoWhite from "/assets/logoWhite.png";
import logoBlack from "/assets/logoBlack.png";

export default function MainHeader() {
    const [logo, setLogo] = useState(logoWhite);
    const [color, setColor] = useState('white');

    useEffect(() => {
        const scrollFunction = () => {
            if (window.scrollY > 50) {
                document.getElementById("header").style.backgroundColor = "#f1e9c0";
                setColor('black');
                setLogo(logoBlack);
            } else {
                document.getElementById("header").style.backgroundColor = "rgba(50,50,50,0.5)";
                setColor('white');
                setLogo(logoWhite);
            }
        }

        window.addEventListener('scroll', scrollFunction);

        return () => window.removeEventListener('scroll', scrollFunction);
    }, []);

    return (
        <header id="header" className={classes.header}>
            <Link className={classes.logo} href="/public">
                <Image src={logo} alt="Logo"/>
            </Link>
            <nav className={classes.nav}>
                <ul>
                    <li><Navlink href="/">Home</Navlink></li>
                    <li><Navlink href="/menu">Menu</Navlink></li>
                    <li><Navlink href="/gallery">Gallery</Navlink></li>
                    <li><Navlink href="/about">About</Navlink></li>
                    <li><Navlink href="/contact">Contact</Navlink></li>
                </ul>
            </nav>
        </header>
    );
}