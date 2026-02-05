import { Request, Response } from "express";

import app from "../app"

app.get("/email/send", (req: Request, res: Response) => {
    const data = req.get("")
})

app.get("/email/verify", (req: Request, res: Response) => {
    
})