import { Request, Response } from "express";
import { Router } from "express";

import { sendEmail, sendVerify } from "../services/email.service";

const router = Router()

router.post("/send", async (req: Request, res: Response) => {
    console.log("EMAIL ROUTE HIT");
    try{
        const { name, company, email, subject, content } = req.body
        await sendEmail(name, company, email, subject, content)
        res.sendStatus(200)
    }catch(error){
        console.log("EMAIL ERROR:", error)
        res.sendStatus(500)
    }
})

router.post("/verify", async (req: Request, res: Response) => {
    try{
        const { name, email } = req.body
        await sendVerify(name, email)
        res.sendStatus(200);
    }catch(error){
        console.log("VERIFY ERROR:", error)
        res.sendStatus(500)
    }
})

export default router