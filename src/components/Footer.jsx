import React, { useState } from "react";
import logoLight from "../assets/logo/mar-logo-light.png";

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
            if (!data.ok) {
                setStatus("error");
                return;
            }

            setStatus("ok");
            setName("");
            setContact("");
            setMessage("");
        } catch {
            setStatus("error");
        }
    }

    return (
        <footer id="contact" className="siteFooter">
            <div className="container">
                <div className="footerTop">
                    <img className="footerLogo" src={logoLight} alt="MAR& Hair Collection" />

                    <div className="footerTagline">Luxury for your hair</div>

                    <p className="footerText">
                        Тихая, осознанная, настоящая. Для сотрудничества и закупок — оставьте контакт.
                    </p>
                </div>

                <div className="footerDivider" />

                <div className="footerFormShell">
                    <div className="footerFormHeader">
                        <div className="footerFormTitle">Связаться</div>
                        <div className="footerFormStatus">
                            {status === "sending"
                                ? "Отправляем…"
                                : status === "ok"
                                    ? "Готово."
                                    : status === "error"
                                        ? "Ошибка отправки."
                                        : " "}
                        </div>
                    </div>

                    <div className="footerFormGrid">
                        <div className="footerFormGridTwo">
                            <input
                                className="inputDarkBeige"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Имя"
                            />
                            <input
                                className="inputDarkBeige"
                                value={contact}
                                onChange={(e) => setContact(e.target.value)}
                                placeholder="Телефон или Email"
                            />
                        </div>

                        <textarea
                            className="inputDarkBeige"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Сообщение (необязательно)"
                            rows={4}
                            style={{ borderRadius: 18, resize: "vertical" }}
                        />

                        <div className="footerFormActions">
                            <button
                                type="button"
                                className="btnBeigeOnDark"
                                onClick={submit}
                                disabled={status === "sending"}
                            >
                                {status === "sending" ? "Отправляем…" : "Отправить"}
                            </button>

                            {status === "ok" && <span className="footerMsgOk">Мы скоро ответим.</span>}
                            {status === "error" && (
                                <span className="footerMsgErr">Не удалось отправить. Попробуйте ещё раз.</span>
                            )}
                        </div>

                        <div className="footerNote">
                            Нажимая «Отправить», вы соглашаетесь на обработку контактных данных для ответа.
                        </div>
                    </div>
                </div>

                <div className="footerBottom">
                    <span>© {new Date().getFullYear()} MAR& Hair Collection</span>
                    <span>Quiet luxury</span>
                </div>
            </div>
        </footer>
    );
}