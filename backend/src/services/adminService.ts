import { Service } from 'typedi';
import AdminRepository from '../repositories/adminRepository';
import { IAdmin } from '../interfaces/IAdmin';

@Service()
class AdminService {
  constructor(private adminRepository: AdminRepository) {}

  async createAdmin(admin: IAdmin): Promise<IAdmin> {
    return await this.adminRepository.createAdmin(admin);
  }

  async getAdmins(): Promise<IAdmin[]> {
    return await this.adminRepository.getAdmins();
  }

  async getAdminById(id: string): Promise<IAdmin | null> {
    return await this.adminRepository.getAdminById(id);
  }

  async updateAdmin(id: string, admin: Partial<IAdmin>): Promise<IAdmin | null> {
    return await this.adminRepository.updateAdmin(id, admin);
  }

  async deleteAdmin(id: string): Promise<IAdmin | null> {
    return await this.adminRepository.deleteAdmin(id);
  }
}

export default AdminService;
