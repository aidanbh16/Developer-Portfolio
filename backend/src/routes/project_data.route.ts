import { Request, Response } from "express";
import { readFile } from "fs/promises";

import app from "../app"
import path from "path"

app.get("/project/data", async (req: Request, res: Response) => {
    async function fetchData(){
        try{
            const filePath = path.join(
                process.cwd(),
                "src",
                "data",
                "projects.json"
            );
            
            const json = await readFile(filePath, "utf8")
            const data = JSON.parse(json)

            return data
        }catch{
            console.log("Error reading or parsing json")
        }
    }

    const data = await fetchData()

    res.json(data)
})