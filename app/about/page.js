import classes from "./page.module.css";
import Image from "next/image";
import imgMenu from '@/assets/aboutImg.jpg';
import miniImg1 from '@/assets/minichef1.jpg';
import miniImg2 from '@/assets/minichef2.webp';
import miniImg3 from '@/assets/minichef3.jpg';
import miniImg4 from '@/assets/minichef4.jpg';


export default function AboutPage() {
    return (
        <>
            <div className={classes.imgCont}>
                <Image className={classes.mainImage} src={imgMenu} alt="chef" layout="fill" objectFit="cover"/>
                <h1 className={classes.sign}>About us</h1>
            </div>
            <div className={classes.bigContainer1}>
                <div className={classes.mainText}>
                    <h1 className={classes.textH1}>OUR STORY</h1>
                    <p> Fusce at risus eget mi auctor pulvinar. Suspendisse maximus venenatis pretium.
                        Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                        Aliquam purus purus, lacinia a scelerisque in, luctus vel felis.
                        Donec odio diam, dignissim a efficitur at, efficitur et est.
                        Pellentesque semper est ut pulvinar ullamcorper.
                        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                        Nulla et leo accumsan, egestas velit ac, fringilla tortor. Sed varius justo sed luctus
                        mattis.</p>
                </div>
            </div>
                <div className={classes.bigContainer2}>
                    <h1 className={classes.textH1}>MEET OUR CHEF</h1>
                    <div className={classes.container}>
                        <div className={classes.card}>
                            <Image src={miniImg1} alt="chef" fill/>
                            <div className={classes.bar}>
                                <div className={classes.emptybar}></div>
                                <div className={classes.filledbar}></div>
                            </div>

                            <div className={classes.circle}>
                                <svg className={classes.svg} version="1.1" xmlns="http://www.w3.org/2000/svg">
                                    <circle className={classes.stroke} cx="60" cy="60" r="50"/>
                                    <text x="20%" y="40%" textAnchor="middle" fill="#fff" dy=".3em"
                                          className={classes.circleText}>CHEF 1
                                    </text>
                                </svg>
                            </div>
                        </div>
                        <div className={classes.card}>
                            <Image src={miniImg2} alt="chef" fill/>

                            <div className={classes.bar}>
                                <div className={classes.emptybar}></div>
                                <div className={classes.filledbar}></div>
                            </div>
                            <div className={classes.circle}>
                                <svg className={classes.svg} version="1.1" xmlns="http://www.w3.org/2000/svg">
                                    <circle className={classes.stroke} cx="60" cy="60" r="50"/>
                                    <text x="20%" y="40%" textAnchor="middle" fill="#fff" dy=".3em"
                                          className={classes.circleText}>CHEF 2
                                    </text>
                                </svg>
                            </div>
                        </div>
                        <div className={classes.card}>
                            <Image src={miniImg3} alt="chef" fill/>

                            <div className={classes.bar}>
                                <div className={classes.emptybar}></div>
                                <div className={classes.filledbar}></div>
                            </div>
                            <div className={classes.circle}>
                                <svg className={classes.svg} version="1.1" xmlns="http://www.w3.org/2000/svg">
                                    <circle className={classes.stroke} cx="60" cy="60" r="50"/>
                                    <text x="20%" y="40%" textAnchor="middle" fill="#fff" dy=".3em"
                                          className={classes.circleText}>CHEF 3
                                    </text>
                                </svg>
                            </div>
                        </div>
                        <div className={classes.card}>
                            <Image src={miniImg4} alt="chef" fill/>

                            <div className={classes.bar}>
                                <div className={classes.emptybar}></div>
                                <div className={classes.filledbar}></div>
                            </div>
                            <div className={classes.circle}>
                                <svg className={classes.svg} version="1.1" xmlns="http://www.w3.org/2000/svg">
                                    <circle className={classes.stroke} cx="60" cy="60" r="50"/>
                                    <text x="20%" y="40%" textAnchor="middle" fill="#fff" dy=".3em"
                                          className={classes.circleText}>CHEF 4
                                    </text>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    );
}
