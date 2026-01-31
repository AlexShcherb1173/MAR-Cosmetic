import React from "react";
import Header from "../components/Header.jsx";
import Section from "../components/Section.jsx";
import Footer from "../components/Footer.jsx";

export default function Mask() {
    return (
        <>
            <Header />

            <Section>
                <div className="kicker">Product</div>
                <h1 className="h1">MAR& Hair Mask</h1>
                <p className="p" style={{ maxWidth: 740 }}>
                    Интенсивная маска для длины. Мягкость, плотность и естественный блеск — без утяжеления.
                </p>

                <div style={{ display: "flex", gap: 12, marginTop: 20, flexWrap: "wrap" }}>
                    <button className="btn btnSolid" type="button">Купить / Запросить прайс</button>
                    <span className="softLabel">300 ml • now</span>
                    <span className="softLabel">500 ml • soon</span>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 26 }}>
                    <div className="card" style={{ padding: 20 }}>
                        <div className="kicker">For</div>
                        <h2 className="h2" style={{ marginTop: 10 }}>Кому подходит</h2>
                        <ul style={{ margin: 0, paddingLeft: 18, color: "rgba(245,239,231,.88)", lineHeight: 1.75 }}>
                            <li>сухая / обезвоженная длина</li>
                            <li>пористость, ломкость, пушистость</li>
                            <li>тусклый вид, потеря мягкости</li>
                            <li>нужен регулярный уход без перегруза</li>
                        </ul>
                    </div>

                    <div className="card" style={{ padding: 20 }}>
                        <div className="kicker">How to use</div>
                        <h2 className="h2" style={{ marginTop: 10 }}>Применение</h2>
                        <ol style={{ margin: 0, paddingLeft: 18, color: "rgba(245,239,231,.88)", lineHeight: 1.75 }}>
                            <li>нанести на чистые влажные волосы</li>
                            <li>распределить по длине</li>
                            <li>оставить на 5–10 минут</li>
                            <li>тщательно смыть</li>
                        </ol>
                        <p className="kicker" style={{ marginTop: 12, opacity: 0.75 }}>1–2 раза в неделю</p>
                    </div>
                </div>

                <div className="card" style={{ padding: 22, marginTop: 16 }}>
                    <div className="kicker">Packaging</div>
                    <h2 className="h2" style={{ marginTop: 10 }}>Тактильная эстетика</h2>
                    <p className="p">
                        Тёмно-коричневая банка и soft touch этикетка в бежевом корпоративном стиле — как “тихий люкс” в руках.
                    </p>
                </div>
            </Section>

            <Footer />
        </>
    );
}