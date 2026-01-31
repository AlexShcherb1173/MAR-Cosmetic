import React from "react";
import Header from "../components/Header.jsx";
import Hero from "../components/Hero.jsx";
import Manifesto from "../components/Manifesto.jsx";
import ProductTeaser from "../components/ProductTeaser.jsx";
import Ritual from "../components/Ritual.jsx";
import Footer from "../components/Footer.jsx";

export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <hr className="hr" />
            <Manifesto />
            <hr className="hr" />
            <ProductTeaser />
            <hr className="hr" />
            <Ritual />
            <Footer />
        </>
    );
}