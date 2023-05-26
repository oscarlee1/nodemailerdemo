
import nodemailer from "nodemailer"

const email = process.env.EMAIL
const pass = process.env.PASS

export const transporter = nodemailer.createTransport({
  host: "smtpout.secureserver.net",
  port: 465,
  secure: true,
  auth: {
    user: email,
    pass: pass
  }
})
