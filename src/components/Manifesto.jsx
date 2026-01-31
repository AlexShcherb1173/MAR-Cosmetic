import React from "react";
import Section from "./Section.jsx";

export default function Manifesto() {
    return (
        <Section className="">
            <div id="about" className="kicker">Философия</div>
            <h2 className="h2">Тихий люкс — это выбор</h2>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, marginTop: 18 }}>
                <div className="card" style={{ padding: 22 }}>
                    <p className="p">
                        Мы создаём уход не для демонстрации, а для ощущения.
                        MAR& — когда меньше значит больше: спокойная эстетика, чистота формулы, уважение к волосам и времени.
                    </p>
                </div>

                <div className="card" style={{ padding: 22 }}>
                    <p className="p" style={{ color: "rgba(231,223,212,.86)" }}>
                        <span style={{ color: "var(--beige)" }}>Тихая. Осознанная. Настоящая.</span><br/>
                        Результат — ухоженные волосы, которые выглядят естественно и дорого.
                    </p>
                </div>
            </div>
        </Section>
    );
}