import Admin from '../models/Admin';
import { IAdmin } from '../interfaces/IAdmin';

class AdminRepository {
  async createAdmin(admin: IAdmin): Promise<IAdmin> {
    const newAdmin = new Admin(admin);
    return await newAdmin.save();
  }

  async getAdmins(): Promise<IAdmin[]> {
    return await Admin.find();
  }

  async getAdminById(id: string): Promise<IAdmin | null> {
    return await Admin.findById(id);
  }

  async getAdminByEmail(email: string): Promise<IAdmin | null> {
    return await Admin.findOne({ email });
  }

  async updateAdmin(id: string, admin: Partial<IAdmin>): Promise<IAdmin | null> {
    return await Admin.findByIdAndUpdate(id, admin, { new: true });
  }

  async deleteAdmin(id: string): Promise<IAdmin | null> {
    return await Admin.findByIdAndDelete(id);
  }
}

export default AdminRepository;
