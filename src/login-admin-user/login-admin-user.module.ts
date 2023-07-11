import { Module } from '@nestjs/common';
import { LoginAdminUserService } from './login-admin-user.service';
import { LoginAdminUserController } from './login-admin-user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminUser } from 'src/admin-user/entities/admin-user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AdminUser])],
  controllers: [LoginAdminUserController],
  providers: [LoginAdminUserService],
})
export class LoginAdminUserModule {}
