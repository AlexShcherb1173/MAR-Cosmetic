import React from "react";
import Section from "./Section.jsx";
import { Link } from "react-router-dom";
import { scrollToId } from "../utils/scrollToId";

export default function ProductTeaser() {
    return (
        <Section>
            <div className="kicker">Коллекция</div>
            <h2 className="h2">Hair Collection</h2>

            <div className="card" style={{ padding: 22, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, alignItems: "center" }}>
                <div>
                    <div className="softLabel">Now available • 300 ml</div>
                    <h3 style={{ fontFamily: "var(--font-serif)", margin: "14px 0 8px", fontSize: 28, color: "var(--beige)" }}>
                        MAR& Hair Mask
                    </h3>
                    <p className="p">
                        Интенсивный уход без утяжеления. Мягкость, плотность и естественный блеск — в спокойном, тактильном ритуале.
                    </p>
                    <div style={{ display: "flex", gap: 12, marginTop: 18, flexWrap: "wrap" }}>
                        <Link className="btn btnSolid" to="/mask">Маска</Link>
                        <button
                            type="button"
                            className="btn"
                            onClick={() => scrollToId("contact")}
                        >
                            Прайс
                        </button>
                    </div>

                    <p className="kicker" style={{ marginTop: 14, opacity: 0.8 }}>In development • 500 ml</p>
                </div>

                <div style={{ display: "grid", gap: 12 }}>
                    <div className="card" style={{ padding: 18 }}>
                        <div className="kicker">why it feels premium</div>
                        <p className="p" style={{ marginTop: 8 }}>
                            Здесь надо что то написать
                        </p>
                    </div>
                    <div className="card" style={{ padding: 18 }}>
                        <div className="kicker">quiet result</div>
                        <p className="p" style={{ marginTop: 8 }}>
                            Волосы выглядят “дорого” не за счёт эффекта, а за счёт состояния.
                        </p>
                    </div>
                </div>
            </div>
        </Section>
    );
}