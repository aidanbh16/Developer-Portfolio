import app from "./app"
import "./routes/root.route"
import "./routes/project_data.route"

const PORT = 8080

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`)
})