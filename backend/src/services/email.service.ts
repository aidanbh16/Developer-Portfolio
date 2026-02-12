import nodemailer from "nodemailer"

import env from "../config/config";

export async function sendEmail(name: string, company: string, email: string, subject: string, content: string){
    const transport = nodemailer.createTransport({
        host: env.smtp_host,
        port: env.smtp_port,
        secure: false,
        auth: {
          user: env.smtp_user,
          pass: env.smtp_pass,
        }
    })

    const info = await transport.sendMail({
        from: `"${name}" <${email}>`,
        to: env.smtp_user,
        subject: subject,
        text: `From: ${name} <${email}>\nCompany: ${company}\n${content}`,
    });

    console.log("Sent: " + info.envelope)
}

export async function sendVerify(name: string, email: string){
  const transport = nodemailer.createTransport({
      host: env.smtp_host,
      port: env.smtp_port,
      secure: false,
      auth: {
        user: env.smtp_user,
        pass: env.smtp_pass,
      }
  })

  const info = await transport.sendMail({
      from: `"Aidan Holton" <${env.smtp_user}>`,
      to: email,
      subject: "Verification Email",
      text: `Thank you for contacting me ${name}, I will be in touch with you shortly.`,
  });

  console.log("Sent: " + info.envelope)
}