import app from "./app"
import env from "./config/config"

const PORT = env.port

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`)
})