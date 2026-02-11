import { Request, Response } from "express";
import { Router } from "express";

const router = Router()

router.get("/health", (req: Request, res: Response) => {
    res.send("Health test success!")
})

export default router