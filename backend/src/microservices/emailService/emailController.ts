import { Request, Response } from 'express';
import EmailService from './emailService';
import { Container } from 'typedi';

const emailServiceInstance = Container.get(EmailService);

export const sendEmail = async (req: Request, res: Response) => {
  const { to, subject, body } = req.body;
  try {
    await emailServiceInstance.sendEmail({ to, subject, body });
    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
