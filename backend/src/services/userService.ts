import { Service } from 'typedi'; 
import UserRepository from '../repositories/userRepository';
import { IUser } from '../interfaces/IUser';

@Service()
class UserService {
  constructor(private userRepository: UserRepository) {}

  async getUserById(id: string): Promise<IUser | null> {
    return await this.userRepository.getUserById(id);
  }

  async getAllUsers(): Promise<IUser[]> {
    return await this.userRepository.getUsers();
  }

  async updateUser(id: string, user: Partial<IUser>): Promise<IUser | null> {
    return await this.userRepository.updateUser(id, user);
  }

  async deleteUser(id: string): Promise<IUser | null> {
    return await this.userRepository.deleteUser(id);
  }
}

export default UserService;
