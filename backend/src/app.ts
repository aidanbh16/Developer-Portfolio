import express from "express"
import cors from "cors"
import env from "./config"

const app = express()

app.use(
    cors({
        origin: env.frontend_url
    })
)

export default app