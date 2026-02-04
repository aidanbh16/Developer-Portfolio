import "dotenv/config"

const env = {
    frontend_url: process.env.FRONTEND_PROD_DOMAIN ?? "http://localhost:3000",
    port: Number(process.env.PORT) || 8080,
}

export default env