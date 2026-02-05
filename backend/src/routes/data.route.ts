import { Request, Response } from "express";

import app from "../app"
import { fetchData } from "../services/data.service";

app.get("/project/data", async (req: Request, res: Response) => {
    const data = await fetchData()

    res.json(data)
})