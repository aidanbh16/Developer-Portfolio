import { readFile } from "fs/promises";

import path from "path"

export async function fetchData(){
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