import express from "express"
import cors from "cors"
import env from "./config/config"

import emailRoutes from "./routes/email.route"
import dataRoutes from "./routes/data.route"
import healthRoutes from "./routes/health.route"

const app = express()

app.use(cors({origin: env.frontend_url}))
app.use(express.json())

app.use("/email", emailRoutes)
app.use("/data", dataRoutes)
app.use("/health", healthRoutes)

export default app