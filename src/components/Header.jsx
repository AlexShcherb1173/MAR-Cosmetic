import React from "react";
import { Link, NavLink } from "react-router-dom";
import logoLight from "../assets/logo/mar-logo-light.jpg";
import { scrollToId } from "../utils/scrollToId";

export default function Header() {
    return (
        <header className="siteHeader">
            <div className="container siteHeaderInner">
                <Link to="/" className="brandLink" aria-label="MAR& Home">
                    <img className="brandLogo" src={logoLight} alt="MAR& Hair Collection" />
                </Link>

                <nav className="siteNav">
                    <NavLink
                        to="/"
                        className={({ isActive }) => (isActive ? "navItem navItemActive" : "navItem")}
                    >
                        Бренд
                    </NavLink>

                    <NavLink
                        to="/mask"
                        className={({ isActive }) => (isActive ? "navItem navItemActive" : "navItem")}
                    >
                        Маска
                    </NavLink>

                    <button type="button" className="btn" onClick={() => scrollToId("contact")}>
                        Контакты
                    </button>
                </nav>
            </div>
        </header>
    );
}