import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { LoginAdminUserDto } from './dto/login-admin-user.dto';
import { UpdateLoginAdminUserDto } from './dto/update-login-admin-user.dto';
import { Repository } from 'typeorm';
import { AdminUser } from 'src/admin-user/entities/admin-user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import bcrypt from 'bcryptjs';

@Injectable()
export class LoginAdminUserService {
  constructor(
    @InjectRepository(AdminUser)
    private adminUserRepository: Repository<AdminUser>,
  ) {}
  create(createLoginAdminUserDto: LoginAdminUserDto) {
    return 'This action adds a new loginAdminUser';
  }

  async logIn(body: LoginAdminUserDto) {
    try {
      const findAdminUser = await this.adminUserRepository.find({
        where: {
          email: body.email,
          password: body.password,
        },
      });
      if (findAdminUser[0]) {
        return {
          message: `User ${findAdminUser[0].firstName} ${findAdminUser[0].lastName} successfully logIn.`,
          status: 200,
        };
      } else {
        return new HttpException(
          'User can not be found!',
          HttpStatus.NOT_FOUND,
        );
      }
    } catch (error) {
      return error;
    }
  }

  findAll() {
    return `This action returns all loginAdminUser`;
  }

  findOne(id: number) {
    return `This action returns a #${id} loginAdminUser`;
  }

  update(id: number, updateLoginAdminUserDto: UpdateLoginAdminUserDto) {
    return `This action updates a #${id} loginAdminUser`;
  }

  remove(id: number) {
    return `This action removes a #${id} loginAdminUser`;
  }
}
