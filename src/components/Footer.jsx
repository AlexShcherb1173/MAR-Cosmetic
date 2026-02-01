import React, { useState } from "react";

export default function Footer() {
    const [name, setName] = useState("");
    const [contact, setContact] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("idle"); // idle | sending | ok | error

    async function submit() {
        setStatus("sending");
        try {
            const r = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, contact, message }),
            });
            const data = await r.json();
            if (!data.ok) throw new Error("bad");
            setStatus("ok");
            setName(""); setContact(""); setMessage("");
        } catch {
            setStatus("error");
        }
    }

    return (
        <footer id="contact" style={{ padding: "70px 0", borderTop: "1px solid var(--line)", background: "rgba(0,0,0,.10)" }}>
            <div className="container" style={{ display: "grid", gridTemplateColumns: "1.2fr .8fr", gap: 18 }}>
                <div>
                    <div style={{ fontFamily: "var(--font-serif)", fontSize: 26, color: "var(--beige)" }}>MAR&</div>
                    <div className="kicker" style={{ marginTop: 6 }}>Luxury for your hair</div>
                    <p className="p" style={{ marginTop: 14, maxWidth: 520 }}>
                        Тихая, осознанная, настоящая. Для сотрудничества и закупок — оставьте контакт.
                    </p>
                </div>

                <div className="card" style={{ padding: 18 }}>
                    <div className="kicker">Связаться</div>

                    <div style={{ display: "grid", gap: 10, marginTop: 12 }}>
                        <input value={name} onChange={(e)=>setName(e.target.value)} placeholder="Имя" style={inpStyle} />
                        <input value={contact} onChange={(e)=>setContact(e.target.value)} placeholder="Телефон или Email" style={inpStyle} />
                        <textarea value={message} onChange={(e)=>setMessage(e.target.value)} placeholder="Сообщение (необязательно)" rows={4} style={{...inpStyle, borderRadius: 16}} />
                        <button className="btn btnSolid" type="button" onClick={submit} disabled={status==="sending"}>
                            {status==="sending" ? "Отправляем..." : "Отправить"}
                        </button>

                        {status === "ok" && <div className="kicker" style={{ color: "var(--beige)" }}>Готово. Мы скоро ответим.</div>}
                        {status === "error" && <div className="kicker" style={{ color: "rgba(255,180,180,.9)" }}>Не удалось отправить. Попробуйте ещё раз.</div>}
                    </div>
                </div>
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