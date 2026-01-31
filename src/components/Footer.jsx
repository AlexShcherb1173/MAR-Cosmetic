import React from "react";

export default function Footer() {
    return (
        <footer id="contact" style={{ padding: "70px 0", borderTop: "1px solid var(--line)", background: "rgba(0,0,0,.10)" }}>
            <div className="container" style={{ display: "grid", gridTemplateColumns: "1.2fr .8fr", gap: 18 }}>
                <div>
                    <div style={{ fontFamily: "var(--font-serif)", fontSize: 26, color: "var(--beige)" }}>MAR&</div>
                    <div className="kicker" style={{ marginTop: 6 }}>Luxury for your hair</div>
                    <p className="p" style={{ marginTop: 14, maxWidth: 520 }}>
                        Тихая, осознанная, настоящая.
                        Для сотрудничества и закупок: оставьте контакт — мы ответим.
                    </p>
                </div>

                <div className="card" style={{ padding: 18 }}>
                    <div className="kicker">Связаться</div>
                    <div style={{ display: "grid", gap: 10, marginTop: 12 }}>
                        <input placeholder="Имя" style={inpStyle} />
                        <input placeholder="Телефон или Email" style={inpStyle} />
                        <button className="btn btnSolid" type="button">Отправить</button>
                        <div className="kicker" style={{ opacity: 0.7 }}>Форма-заглушка: подключишь к CRM/почте</div>
                    </div>
                </div>
            </div>

            <div className="container" style={{ marginTop: 18, display: "flex", justifyContent: "space-between", color: "rgba(231,223,212,.70)", fontSize: 12 }}>
                <span>© {new Date().getFullYear()} MAR& Hair Collection</span>
                <span>Designed in quiet luxury</span>
            </div>
        </footer>
    );
}

const inpStyle = {
    width: "100%",
    padding: "12px 12px",
    borderRadius: 14,
    border: "1px solid rgba(231,223,212,.18)",
    outline: "none",
    background: "rgba(231,223,212,.06)",
    color: "var(--ink)",
};