import { Service } from 'typedi';
import nodemailer from 'nodemailer';
import EmailRepository from '../repositories/emailRepository';
import { IEmail } from '../interfaces/IEmail';

@Service()
class EmailService {
  private transporter;

  constructor(private emailRepository: EmailRepository) {
    this.transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
  }

  async sendEmail(email: IEmail): Promise<void> {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email.to,
      subject: email.subject,
      text: email.body,
    };

    await this.transporter.sendMail(mailOptions);
    await this.emailRepository.createEmail(email);
  }

  async getEmails(): Promise<IEmail[]> {
    return await this.emailRepository.getEmails();
  }

  async getEmailById(id: string): Promise<IEmail | null> {
    return await this.emailRepository.getEmailById(id);
  }

  async updateEmail(id: string, email: Partial<IEmail>): Promise<IEmail | null> {
    return await this.emailRepository.updateEmail(id, email);
  }

  async deleteEmail(id: string): Promise<IEmail | null> {
    return await this.emailRepository.deleteEmail(id);
  }
}

export default EmailService;
