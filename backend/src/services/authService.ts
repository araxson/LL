import { Service } from 'typedi';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import UserRepository from '../repositories/userRepository';
import { IUser } from '../interfaces/IUser';

@Service()
class AuthService {
  constructor(private userRepository: UserRepository) {}

  async register(user: IUser): Promise<IUser> {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    user.password = hashedPassword;
    return await this.userRepository.createUser(user);
  }

  async login(email: string, password: string): Promise<string> {
    const user = await this.userRepository.getUserByEmail(email);
    if (!user) throw new Error('User not found');

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error('Invalid credentials');

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET!, {
      expiresIn: '1h',
    });
    return token;
  }
}

export default AuthService;
