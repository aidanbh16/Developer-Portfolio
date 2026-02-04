import app from "../app"
import path from "path"
import fs from "fs/promises"

app.get("/project/data", async (req, res) => {
    async function fetchData(){
        try{
            const filePath = path.join(
                process.cwd(),
                "src",
                "data",
                "projects.json"
            );
            
            const json = await fs.readFile(filePath, "utf8")
            const data = JSON.parse(json)

            return data
        }catch{
            console.log("Error reading or parsing json")
        }
    }

    const data = await fetchData()

    res.json(data)
})