import nodemailer from "nodemailer"

async function sendEmail(){

    const transport = nodemailer.createTransport({
        sendmail: true,
    })

}