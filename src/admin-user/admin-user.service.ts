import { Injectable } from '@nestjs/common';
import { CreateAdminUserDto } from './dto/create-admin-user.dto';
import { UpdateAdminUserDto } from './dto/update-admin-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { AdminUser } from './entities/admin-user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AdminUserService {
  constructor(
    @InjectRepository(AdminUser)
    private adminUserRepository: Repository<AdminUser>,
  ) {}
  async create(body: CreateAdminUserDto) {
    try {
      const response = await this.adminUserRepository.save(body);

      console.log('User added successfully');
      return {
        message: 'User added successfully',
        response: response,
      };
    } catch (error) {
      return {
        message: 'User not inserted',
        response: error,
      };
    }
  }

  findAll() {
    return `This action returns all adminUser`;
  }

  findOne(id: number) {
    return `This action returns a #${id} adminUser`;
  }

  update(id: number, updateAdminUserDto: UpdateAdminUserDto) {
    return `This action updates a #${id} adminUser`;
  }

  remove(id: number) {
    return `This action removes a #${id} adminUser`;
  }
}
