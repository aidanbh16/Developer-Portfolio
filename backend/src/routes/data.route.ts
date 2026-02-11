import { Request, Response } from "express";
import { Router } from "express";

import { fetchData } from "../services/data.service";

const router = Router()

router.get("/projects", async (req: Request, res: Response) => {
    const data = await fetchData()
    res.json(data)
})

export default router