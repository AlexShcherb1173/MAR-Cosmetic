import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
    return (
        <section style={{ padding: "86px 0 70px" }}>
            <div className="container" style={{ display: "grid", gridTemplateColumns: "1.1fr .9fr", gap: 28, alignItems: "center" }}>
                <div>
                    <div className="softLabel">Quiet luxury • Hair care</div>
                    <div className="h1">Luxury for your hair</div>
                    <p className="p" style={{ maxWidth: 560 }}>
                        <span style={{ color: "var(--beige)" }}>Тихая. Осознанная. Настоящая.</span>{" "}
                        Уход, который не требует громких обещаний. Тактильные текстуры, чистая эстетика, спокойный результат.
                    </p>

                    <div style={{ display: "flex", gap: 12, marginTop: 22, flexWrap: "wrap" }}>
                        <Link className="btn btnSolid" to="/mask">Открыть маску</Link>
                        <a className="btn" href="#about">О бренде</a>
                    </div>

                    <div style={{ display: "flex", gap: 18, marginTop: 28, flexWrap: "wrap", color: "rgba(231,223,212,.80)" }}>
                        <span className="kicker">SOFT TOUCH LABEL</span>
                        <span className="kicker">DARK BROWN JAR</span>
                        <span className="kicker">BEIGE IDENTITY</span>
                    </div>
                </div>

                <div className="card" style={{ minHeight: 380, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {/* Заменишь на свой главный visual (банка/фото) */}
                    <div style={{
                        width: "78%",
                        aspectRatio: "1/1",
                        borderRadius: 26,
                        background:
                            "radial-gradient(240px 240px at 35% 25%, rgba(231,223,212,.16), transparent 60%), linear-gradient(180deg, rgba(43,22,17,.95), rgba(11,7,6,.92))",
                        border: "1px solid rgba(231,223,212,.18)",
                        boxShadow: "var(--shadow)",
                        position: "relative"
                    }}>
                        <div style={{ position: "absolute", inset: 18, border: "1px solid rgba(231,223,212,.18)", borderRadius: 22 }} />
                        <div style={{ position: "absolute", left: 26, bottom: 24, right: 26 }}>
                            <div style={{ fontFamily: "var(--font-serif)", fontSize: 28, color: "var(--beige)" }}>MAR&</div>
                            <div className="kicker">HAIR COLLECTION</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}