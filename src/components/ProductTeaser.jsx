import React from "react";
import Section from "./Section.jsx";
import { Link } from "react-router-dom";
import { scrollToId } from "../utils/scrollToId";
import logoLight from "../assets/logo/mar-logo-light.png";

export default function ProductTeaser() {
    return (
        <Section>
            <div className="kicker">Коллекция</div>
            <h2 className="h2">Hair Collection</h2>

            <div
                className="card"
                style={{
                    padding: 22,
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 18,
                    alignItems: "center",
                }}
            >
                {/* LEFT */}
                <div>
                    <div className="softLabel">Now available • 300 ml</div>

                    {/* ✅ вместо "MAR& Hair Mask" */}
                    <div className="titleRow" style={{ margin: "14px 0 8px" }}>
                        <img
                            className="brandLogoFixed"
                            src={logoLight}
                            alt="MAR&"
                        />
                        <span
                            className="titleText"
                            style={{ fontSize: 18, letterSpacing: ".16em" }}
                        >
                            HAIR MASK
                        </span>
                    </div>

                    <p className="p">
                        Интенсивный уход без утяжеления. Мягкость, плотность и естественный блеск —
                        в спокойном, тактильном ритуале.
                    </p>

                    <div style={{ display: "flex", gap: 12, marginTop: 18, flexWrap: "wrap" }}>
                        <Link className="btn btnSolid" to="/mask">
                            Маска
                        </Link>
                        <button
                            type="button"
                            className="btn"
                            onClick={() => scrollToId("contact")}
                        >
                            Прайс
                        </button>
                    </div>

                    <p className="kicker" style={{ marginTop: 14, opacity: 0.8 }}>
                        In development • 500 ml
                    </p>
                </div>

                {/* RIGHT */}
                <div style={{ display: "grid", gap: 12 }}>
                    <div className="card" style={{ padding: 18 }}>
                        <div className="kicker">why it feels premium</div>
                        <p className="p" style={{ marginTop: 8 }}>
                            Чистая формула, выверенные пропорции и тактильное ощущение ухода —
                            без визуального шума и агрессивных эффектов.
                        </p>
                    </div>

                    <div className="card" style={{ padding: 18 }}>
                        <div className="kicker">quiet result</div>
                        <p className="p" style={{ marginTop: 8 }}>
                            Волосы выглядят «дорого» не за счёт эффекта, а за счёт состояния.
                        </p>
                    </div>
                </div>
            </div>
        </Section>
    );
}