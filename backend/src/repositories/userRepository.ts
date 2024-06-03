import User from '../models/User';
import { IUser } from '../interfaces/IUser';

class UserRepository {
  async createUser(user: IUser): Promise<IUser> {
    const newUser = new User(user);
    return await newUser.save();
  }

  async getUsers(): Promise<IUser[]> {
    return await User.find();
  }

  async getUserById(id: string): Promise<IUser | null> {
    return await User.findById(id);
  }

  async getUserByEmail(email: string): Promise<IUser | null> {
    return await User.findOne({ email });
  }

  async updateUser(id: string, user: Partial<IUser>): Promise<IUser | null> {
    return await User.findByIdAndUpdate(id, user, { new: true });
  }

  async deleteUser(id: string): Promise<IUser | null> {
    return await User.findByIdAndDelete(id);
  }
}

export default UserRepository;
