import { render } from "@react-email/render";
import nodemailer from "nodemailer";
import * as React from "react";
import Email from "./email";

const transporter = nodemailer.createTransport({
  host: String(process.env.SMTP_HOST),
  port: Number(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === 'true' ? true : false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
  ignoreTLS: true
});

const emailHtml = render(<Email />);

const options = {
  from: "nicolas@morinfo.com.br",
  to: "nicolas@morinfo.com.br",
  subject: "hello world",
  html: emailHtml,
};

await transporter.sendMail(options);