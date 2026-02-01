import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Hero.module.css";

import heroBox from "../assets/hero-box.jpg";
import heroJars from "../assets/hero-jars.jpg";
import heroHair from "../assets/hero-hair.jpg";
import logoLight from "../assets/logo/mar-logo-light.png";

import { scrollToId } from "../utils/scrollToId";

export default function Hero() {
    const slides = useMemo(
        () => [
            { key: "box", img: heroBox },
            { key: "jars", img: heroJars },
            { key: "hair", img: heroHair },
        ],
        []
    );

    const [activeIndex, setActiveIndex] = useState(0);
    const [paused, setPaused] = useState(false);
    const timerRef = useRef(null);

    const active = slides[activeIndex];

    // тихое автопереключение 6–8 сек (random)
    useEffect(() => {
        if (paused) return;

        const scheduleNext = () => {
            const delay = Math.floor(Math.random() * (8000 - 6000 + 1)) + 6000;
            timerRef.current = setTimeout(() => {
                setActiveIndex((i) => (i + 1) % slides.length);
                scheduleNext();
            }, delay);
        };

        scheduleNext();
        return () => clearTimeout(timerRef.current);
    }, [paused, slides.length]);

    const pauseHandlers = {
        onMouseEnter: () => setPaused(true),
        onMouseLeave: () => setPaused(false),
        onFocus: () => setPaused(true),
        onBlur: () => setPaused(false),
    };

    return (
        <section className={styles.hero}>
            <div className={`container ${styles.grid}`}>
                {/* LEFT */}
                <div className={styles.left}>
                    <div className="softLabel">Quiet luxury • Hair care</div>
                    <div className="h1">Luxury for your hair</div>

                    <p className="p" style={{ maxWidth: 560 }}>
                        <span style={{ color: "var(--beige)" }}>Тихая. Осознанная. Настоящая.</span>{" "}
                        Уход, который не требует громких обещаний. Тактильные текстуры, чистая эстетика, спокойный результат.
                    </p>

                    <div className={styles.actions}>
                        <Link className="btn btnSolid" to="/mask">Открыть маску</Link>
                        <button type="button" className="btn" onClick={() => scrollToId("about")}>
                            О бренде
                        </button>
                    </div>

                    <div className={styles.kickerLine}>
                        <span className="kicker">SOFT TOUCH LABEL</span>
                        <span className="kicker">DARK BROWN JAR</span>
                        <span className="kicker">BEIGE IDENTITY</span>
                    </div>
                </div>

                {/* RIGHT */}
                <div className={`card ${styles.visual}`} {...pauseHandlers}>
                    <img key={active.key} src={active.img} alt="MAR& visual" className={styles.image} />
                    <div className={styles.overlay} />

                    <div className={styles.caption}>
                        <img src={logoLight} alt="MAR& Hair Collection" className={styles.logo} />
                        <div className="kicker" style={{ opacity: 0.9 }}>HAIR COLLECTION</div>
                    </div>
                </div>
            </div>
        </section>
    );
}