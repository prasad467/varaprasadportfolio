import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { nom, prenom, email, message } = await request.json();

    if (!nom || !prenom || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,

      // YOUR EMAIL
      to: "palivelavaraprasad46@gmail.com",

      subject: `New Portfolio Contact Message from ${prenom} ${nom}`,

      text: `
Name: ${prenom} ${nom}

Email: ${email}

Message:
${message}
      `,

      html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <title>Portfolio Contact Message</title>
      </head>
      <body style="font-family: Arial, sans-serif; background:#f5f5f5; padding:30px;">
        
        <div style="
          max-width:700px;
          margin:auto;
          background:white;
          border-radius:12px;
          padding:30px;
          box-shadow:0 2px 10px rgba(0,0,0,0.1);
        ">
          
          <h1 style="margin-top:0;color:#111;">
            New Portfolio Contact Message
          </h1>

          <p>
            Someone submitted your portfolio contact form.
          </p>

          <hr style="margin:20px 0;" />

          <p>
            <strong>Name:</strong><br>
            ${prenom} ${nom}
          </p>

          <p>
            <strong>Email:</strong><br>
            <a href="mailto:${email}">
              ${email}
            </a>
          </p>

          <p>
            <strong>Message:</strong>
          </p>

          <div style="
            background:#f8f8f8;
            padding:15px;
            border-radius:8px;
            line-height:1.6;
          ">
            ${message.replace(/\n/g, "<br>")}
          </div>

          <div style="margin-top:30px;">
            <a
              href="mailto:${email}"
              style="
                display:inline-block;
                background:#111;
                color:white;
                text-decoration:none;
                padding:12px 24px;
                border-radius:8px;
              "
            >
              Reply to Sender
            </a>
          </div>

          <hr style="margin:30px 0 20px;" />

          <p style="font-size:13px;color:#666;">
            This message was sent from the portfolio website of
            Vara Prasad Palivela.
          </p>

          <p style="font-size:13px;color:#666;">
            © ${new Date().getFullYear()} Vara Prasad Palivela
          </p>

        </div>

      </body>
      </html>
      `,
    });

    return NextResponse.json(
      {
        message: "Message sent successfully",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error sending email:", error);

    return NextResponse.json(
      {
        error: "Failed to send message",
      },
      {
        status: 500,
      }
    );
  }
}