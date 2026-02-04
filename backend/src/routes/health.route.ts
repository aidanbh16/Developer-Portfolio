import { Request, Response } from "express";

import app from "../app"

app.get("/health", (req: Request, res: Response) => {
    res.send("Health test success!")
})