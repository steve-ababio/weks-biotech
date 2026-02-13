import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, phone } = await req.json()

    if (!name || !email || !phone) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      )
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    await transporter.sendMail({
      from: `"Website Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECEIVER, // where you want to receive emails
      subject: "New Contact Form Submission",
      html: `
        <h3>New Contact Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
      `,
    })

    return NextResponse.json({ message: "Email sent successfully" })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 }
    )
  }
}
