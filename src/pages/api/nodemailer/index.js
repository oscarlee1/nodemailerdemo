
import { transporter } from "../../../lib/nodemailer"

export default async function handler(req, res) {
  const { method } = req

  try {
    res.json({ success: true, method: method, body: req.body })
  } catch(err) {
    res.json({ success: false, message: err.message })
  }

  /*
  switch(method) {
    case "POST":
      const requestBody = JSON.parse(req.body)

      console.log(requestBody)

      const from = process.env.EMAIL
      const to = requestBody.email

      try {
        await transporter.sendMail({
          from: from,
          to: to,
          subject: `${ requestBody.subject }`,
          html: `${ requestBody.message }`
        })

        res.json({ success: true })
      } catch(err) {
        res.json({ success: false, message: err.message })
      }
      break
    default:
      res.json({ success: false })
      break
  }
  */
}
