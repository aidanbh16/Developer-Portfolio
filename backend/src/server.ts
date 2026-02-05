import app from "./app"
import env from "./config/config"
import "./routes/health.route"
import "./routes/data.route"

const PORT = env.port

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`)
})