import React from "react";

export default function Section({ children, className = "" }) {
    return (
        <section className={className} style={{ padding: "78px 0" }}>
            <div className="container">{children}</div>
        </section>
    );
}