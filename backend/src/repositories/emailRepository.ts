import Email from '../models/Email';
import { IEmail } from '../interfaces/IEmail';

class EmailRepository {
  async createEmail(email: IEmail): Promise<IEmail> {
    try {
      const newEmail = new Email(email);
      return await newEmail.save();
    } catch (err) {
      throw err;
    }
  }

  async getEmails(): Promise<IEmail[]> {
    try {
      return await Email.find();
    } catch (err) {
      throw err;
    }
  }

  async getEmailById(id: string): Promise<IEmail | null> {
    try {
      return await Email.findById(id);
    } catch (err) {
      throw err;
    }
  }

  async updateEmail(id: string, email: Partial<IEmail>): Promise<IEmail | null> {
    try {
      return await Email.findByIdAndUpdate(id, email, { new: true });
    } catch (err) {
      throw err;
    }
  }

  async deleteEmail(id: string): Promise<IEmail | null> {
    try {
      return await Email.findByIdAndDelete(id);
    } catch (err) {
      throw err;
    }
  }
}

export default EmailRepository;