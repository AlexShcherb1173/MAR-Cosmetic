import express from "express";
import nodemailer from "nodemailer";

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3001;

app.get("/health", (_, res) => res.json({ ok: true }));

app.post("/contact", async (req, res) => {
    try {
        const { name, contact, message } = req.body || {};
        if (!name || !contact) {
            return res.status(400).json({ ok: false, error: "name/contact required" });
        }

        const text =
            `MAR& Contact
Name: ${name}
Contact: ${contact}
Message: ${message || "-"}`;

        // 1) Telegram
        if (process.env.TG_BOT_TOKEN && process.env.TG_CHAT_ID) {
            await fetch(`https://api.telegram.org/bot${process.env.TG_BOT_TOKEN}/sendMessage`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    chat_id: process.env.TG_CHAT_ID,
                    text
                })
            });
        }

        // 2) Email (SMTP)
        if (process.env.SMTP_HOST && process.env.MAIL_TO) {
            const transporter = nodemailer.createTransport({
                host: process.env.SMTP_HOST,
                port: Number(process.env.SMTP_PORT || 587),
                secure: false,
                auth: process.env.SMTP_USER ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS } : undefined,
            });

            await transporter.sendMail({
                from: process.env.MAIL_FROM || process.env.MAIL_TO,
                to: process.env.MAIL_TO,
                subject: "MAR& — New lead",
                text
            });
        }

        return res.json({ ok: true });
    } catch (e) {
        return res.status(500).json({ ok: false, error: "server error" });
    }
});

app.listen(PORT, () => console.log(`mar-api on :${PORT}`));