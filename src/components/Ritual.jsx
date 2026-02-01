import React from "react";
import Section from "./Section.jsx";
import logoLight from "../assets/logo/mar-logo1-light.png";

export default function Ritual() {
    const items = [
        { t: "Питает", d: "Поддерживает баланс длины и кончиков" },
        { t: "Смягчает", d: "Без эффекта «тяжёлых волос»" },
        { t: "Успокаивает", d: "Волосы выглядят ровнее, глаже, тише" },
    ];

    return (
        <Section>
            <div className="kicker">Действие</div>
            <h2 className="h2 titleWithLogo">
                Уход
                <img
                    src={logoLight}
                    alt="MAR&"
                    className="brandLogo"
                />
                который не видно — но чувствуется
            </h2>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14, marginTop: 18 }}>
                {items.map((x) => (
                    <div key={x.t} className="card" style={{ padding: 18 }}>
                        <div style={{ fontFamily: "var(--font-serif)", fontSize: 22, color: "var(--beige)" }}>{x.t}</div>
                        <p className="p" style={{ marginTop: 8 }}>{x.d}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
}