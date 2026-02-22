import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, email, subject, message } = body;

    // Validate input
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 },
      );
    }

    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_USER, // Gmail requires 'from' to match the auth user
      replyTo: `"${name}" <${email}>`, // Valid reply-to address with name
      to: "jakartabanyuu@gmail.com",
      subject: `[Website Inquiry] ${subject}`,
      text: `
        You have received a new message from your website contact form.
        
        Name: ${name}
        Phone: ${phone || "-"}
        Email: ${email}
        Subject: ${subject}
        
        Message:
        ${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0A36A3;">Email Baru Dari Form Website Cendekia Amanah</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone || "-"}</p>
          <p><strong>Email:</strong><a href="mailto:${email}">${email}</a></p>
          <p><strong>Subject:</strong> ${subject}</p>
          <hr style="border: 1px solid #eee; margin: 20px 0;" />
          <p><strong>Message:</strong></p>
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px;">
            ${message.replace(/\n/g, "<br>")}
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: "Email sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to send email. Internal Server Error.",
      },
      { status: 500 },
    );
  }
}
