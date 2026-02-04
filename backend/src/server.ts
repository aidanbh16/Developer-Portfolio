import app from "./app"
import "./routes/project_data.route"

const PORT = 8080

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`)
})