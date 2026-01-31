import React from "react";
import { Link, NavLink } from "react-router-dom";

const navStyle = ({ isActive }) => ({
    color: isActive ? "var(--beige)" : "rgba(231,223,212,.80)",
    textDecoration: "none",
    padding: "10px 12px",
    borderRadius: "999px",
    background: isActive ? "rgba(231,223,212,.10)" : "transparent",
    border: isActive ? "1px solid rgba(231,223,212,.18)" : "1px solid transparent",
});

export default function Header() {
    return (
        <header style={{ position: "sticky", top: 0, zIndex: 20, backdropFilter: "blur(14px)", background: "rgba(11,7,6,.72)", borderBottom: "1px solid var(--line)" }}>
            <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 74 }}>
                <Link to="/" style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
                    <span style={{ fontFamily: "var(--font-serif)", fontSize: 26, letterSpacing: "-0.02em" }}>MAR&</span>
                    <span className="kicker" style={{ opacity: 0.85 }}>HAIR COLLECTION</span>
                </Link>

                <nav style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <NavLink to="/" style={navStyle}>Бренд</NavLink>
                    <NavLink to="/mask" style={navStyle}>Маска</NavLink>
                    <a className="btn" href="#contact">Контакты</a>
                </nav>
            </div>
        </header>
    );
}