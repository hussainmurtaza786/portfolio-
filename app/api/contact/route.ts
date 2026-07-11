import { CONTACT, SITE_TITLE } from "@/app/src/app-config";
import { NextRequest, NextResponse } from "next/server";
import * as yup from "yup";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

const ContactSchema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  subject: yup.string().default(""),
  message: yup.string().required("Message is required"),
});

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();

    const { email, name, message, subject } = await ContactSchema.validate(body, {
      abortEarly: false,
      stripUnknown: true,
    });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.ADMIN_EMAIL_ADDRESS,
        pass: process.env.EMAIL_CLIENT_PASSWORD,
      },
    });

    const subjectLabel =
      subject === "job"
        ? "Full-time opportunity"
        : subject === "contract"
        ? "Contract / Freelance"
        : subject === "collab"
        ? "Collaboration"
        : subject === "consulting"
        ? "Consulting"
        : subject === "other"
        ? "Just saying hi"
        : "No subject";

    const adminMailOptions: Mail.Options = {
      from: process.env.ADMIN_EMAIL_ADDRESS,
      to: CONTACT.ownerEmail,
      subject: `Portfolio Contact — ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; font-size: 15px; line-height: 1.6;">
          <h2 style="margin: 0 0 12px;">New message from your portfolio</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subjectLabel}</p>
          <p><strong>Message:</strong></p>
          <p style="background: #f4f4f4; padding: 12px; border-radius: 6px;">${message}</p>
        </div>
      `,
    };

    const applicantMailOptions: Mail.Options = {
      from: process.env.ADMIN_EMAIL_ADDRESS,
      to: email,
      subject: `Thanks for reaching out, ${name}!`,
      html: `
        <div style="font-family: Arial, sans-serif; font-size: 15px; line-height: 1.6;">
          <p>Hi ${name},</p>
          <p>Thanks for getting in touch! I've received your message and will get back to you shortly.</p>
          <p>In the meantime, feel free to check out my work on
            <a href="https://github.com/hussainmurtaza786">GitHub</a>.
          </p>
          <br/>
          <p>Best,<br/>${SITE_TITLE}</p>
        </div>
      `,
    };

    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(applicantMailOptions),
    ]);

    return NextResponse.json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      return NextResponse.json({ error: error.errors[0] }, { status: 400 });
    }

    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Failed to send message. Please try again." }, { status: 500 });
  }
};
