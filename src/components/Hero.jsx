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

    const [activeIndex, setActiveIndex] = useState(2); // по умолчанию "волосы"
    const [paused, setPaused] = useState(false);
    const intervalRef = useRef(null);

    const active = slides[activeIndex];

    // Автопереключение раз в 7 секунд (в диапазоне 6–8)
    useEffect(() => {
        if (paused) return;

        function scheduleNext() {
            const delay = Math.floor(Math.random() * (8000 - 6000 + 1)) + 6000;

            intervalRef.current = setTimeout(() => {
                setActiveIndex((i) => (i + 1) % slides.length);
                scheduleNext(); // планируем следующий шаг
            }, delay);
        }

    function goTo(index) {
        setActiveIndex(index);
    }

    // Пауза при наведении
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

                    {/* Thumbnails */}
                    <div style={{ marginTop: 22 }}>
                        <div className="kicker" style={{ marginBottom: 10, opacity: 0.85 }}>
                            Визуалы
                        </div>

                        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }} {...pauseHandlers}>
                            {slides.map((s, idx) => {
                                const isActive = idx === activeIndex;
                                return (
                                    <button
                                        key={s.key}
                                        type="button"
                                        className={`marThumb ${isActive ? "marThumbActive" : ""}`}
                                        onClick={() => goTo(idx)}
                                        aria-label={`Показать: ${s.label}`}
                                    >
                                        <img src={s.img} alt={s.label} className="marThumbImg" />
                                        <span className="marThumbLabel">{s.label}</span>
                                    </button>
                                );
                            })}
                        </div>

                        <div className="kicker" style={{ marginTop: 10, opacity: 0.7 }}>
                            {paused ? "Пауза" : "Авто-переключение • 7 сек"}
                        </div>
                    </div>

                    <div
                        style={{
                            display: "flex",
                            gap: 18,
                            marginTop: 18,
                            flexWrap: "wrap",
                            color: "rgba(231,223,212,.80)",
                        }}
                    >
                        <span className="kicker">SOFT TOUCH LABEL</span>
                        <span className="kicker">DARK BROWN JAR</span>
                        <span className="kicker">BEIGE IDENTITY</span>
                    </div>
                </div>

                {/* RIGHT: HERO VISUAL */}
                <div className="card" style={{ position: "relative", minHeight: 440 }} {...pauseHandlers}>
                    <CrossFadeImage src={active.img} alt={`MAR& — ${active.label}`} cacheKey={active.key} />

                    {/* премиум-оверлей */}
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

                    {/* подпись */}
                    <div style={{ position: "absolute", left: 22, right: 22, bottom: 18 }}>
                        <div style={{ fontFamily: "var(--font-serif)", fontSize: 30, color: "var(--beige)" }}>MAR&</div>
                        <div className="kicker" style={{ opacity: 0.9 }}>
                            HAIR COLLECTION • {active.label}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function CrossFadeImage({ src, alt, cacheKey }) {
    // простой, но красивый fade при смене (quiet luxury)
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