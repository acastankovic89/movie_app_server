import { PartialType } from '@nestjs/mapped-types';
import { LoginAdminUserDto } from './login-admin-user.dto';

export class UpdateLoginAdminUserDto extends PartialType(LoginAdminUserDto) {
  email: string;
  password?: string;
}
