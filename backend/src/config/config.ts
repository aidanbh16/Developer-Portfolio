import "dotenv/config"

const env = {
    frontend_url: process.env.FRONTEND_PROD_DOMAIN ?? "http://localhost:3000",
    api_port: Number(process.env.PORT) || 8080,
    smtp_user: process.env.SMTP_USER!,
    smtp_pass: process.env.SMTP_PASS!,
    smtp_port: Number(process.env.SMTP_PORT!),
    smtp_host: process.env.SMTP_HOST!,
}

export default env