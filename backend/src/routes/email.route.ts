import { Request, Response } from "express";
import { Router } from "express";

const router = Router()

router.post("/send", (req: Request, res: Response) => {
    const { name, company, email, subject, content } = req.body
    console.log(name + company + email + subject + content)
    res.sendStatus(200);
})

router.post("/verify", (req: Request, res: Response) => {
    const { name, email } = req.body
    console.log(name + email)
    res.sendStatus(200);
})

export default router