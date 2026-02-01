import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";

import heroBox from "../assets/hero-box.jpg";
import heroJars from "../assets/hero-jars.jpg";
import heroHair from "../assets/hero-hair.jpg";

export default function Hero() {
    const slides = useMemo(
        () => [
            { key: "box", label: "Коробка", img: heroBox },
            { key: "jars", label: "Банки", img: heroJars },
            { key: "hair", label: "Волосы", img: heroHair },
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
        <section style={{ padding: "86px 0 70px" }}>
            <div
                className="container"
                style={{
                    display: "grid",
                    gridTemplateColumns: "1.1fr .9fr",
                    gap: 28,
                    alignItems: "center",
                }}
            >
                {/* LEFT */}
                <div>
                    <div className="softLabel">Quiet luxury • Hair care</div>

                    <div className="h1">Luxury for your hair</div>

                    <p className="p" style={{ maxWidth: 560 }}>
                        <span style={{ color: "var(--beige)" }}>Тихая. Осознанная. Настоящая.</span>{" "}
                        Уход, который не требует громких обещаний. Тактильные текстуры, чистая эстетика, спокойный результат.
                    </p>

                    <div style={{ display: "flex", gap: 12, marginTop: 22, flexWrap: "wrap" }}>
                        <Link className="btn btnSolid" to="/mask">
                            Открыть маску
                        </Link>
                        <a className="btn" href="#about">
                            О бренде
                        </a>
                    </div>

                    <div
                        style={{
                            display: "flex",
                            gap: 18,
                            marginTop: 22,
                            flexWrap: "wrap",
                            color: "rgba(231,223,212,.80)",
                        }}
                    >
                        <span className="kicker">SOFT TOUCH LABEL</span>
                        <span className="kicker">DARK BROWN JAR</span>
                        <span className="kicker">BEIGE IDENTITY</span>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="card" style={{ position: "relative", minHeight: 440, overflow: "hidden" }} {...pauseHandlers}>
                    <CrossFadeImage src={active.img} alt="MAR& visual" cacheKey={active.key} />

                    <div
                        style={{
                            position: "absolute",
                            inset: 0,
                            background:
                                "radial-gradient(700px 520px at 70% 25%, rgba(231,223,212,.12), transparent 60%)," +
                                "linear-gradient(180deg, rgba(11,7,6,.16), rgba(11,7,6,.62))",
                            pointerEvents: "none",
                        }}
                    />

                    <div style={{ position: "absolute", left: 22, right: 22, bottom: 18 }}>
                        <div className="brandMark" style={{ fontSize: 28, color: "var(--beige)" }}>
                            MAR&
                        </div>
                        <div className="kicker" style={{ opacity: 0.9 }}>
                            HAIR COLLECTION
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function CrossFadeImage({ src, alt, cacheKey }) {
    return (
        <img
            key={cacheKey}
            src={src}
            alt={alt}
            style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                filter: "contrast(1.05) saturate(0.92)",
                transform: "scale(1.02)",
                animation: "marFade .45s ease both",
            }}
        />
    );
}