import { IResolvers } from 'graphql-tools';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User } from '../../../models/User';
import { JWT_SECRET } from '../../../config/env';

const authResolvers: IResolvers = {
  Query: {
    login: async (_: any, { email, password }: { email: string, password: string }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new Error('User not found');
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        throw new Error('Invalid credentials');
      }
      const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '1h' });
      return { token, user };
    },
  },
  Mutation: {
    register: async (_: any, { email, password, name }: { email: string, password: string, name: string }) => {
      const userExists = await User.findOne({ email });
      if (userExists) {
        throw new Error('User already exists');
      }
      const hashedPassword = await bcrypt.hash(password, 12);
      const user = new User({
        email,
        password: hashedPassword,
        name,
      });
      await user.save();
      const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '1h' });
      return { token, user };
    },
  },
};

export default authResolvers;
