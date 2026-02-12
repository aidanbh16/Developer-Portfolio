import app from "./app"
import env from "./config/config"

const PORT = env.api_port

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`)
})