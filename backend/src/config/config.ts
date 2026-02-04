import "dotenv/config"

const env = {
    frontend_url: process.env.FRONTEND_PROD_DOMAIN ?? "http://localhost:3000"
}

export default env