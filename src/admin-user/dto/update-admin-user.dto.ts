import { PartialType } from '@nestjs/mapped-types';
import { CreateAdminUserDto } from './create-admin-user.dto';

export class UpdateAdminUserDto extends PartialType(CreateAdminUserDto) {
  email: string;
  password?: string;
  firstName: string;
  lastName: string;
  token: string;
}
