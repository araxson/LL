import { Service } from 'typedi';
import nodemailer from 'nodemailer';

@Service()
class EmailService {
  private transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
  }

  async sendEmail({ to, subject, body }) {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to,
      subject,
      text: body,
    };

    await this.transporter.sendMail(mailOptions);
  }

  async initialize() {
    // Any initialization code for the email service
    console.log('Email service initialized');
  }
}

export default EmailService;
