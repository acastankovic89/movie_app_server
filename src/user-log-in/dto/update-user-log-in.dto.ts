import { PartialType } from '@nestjs/mapped-types';
import { UserLogInDto } from './user-log-in.dto';

export class UpdateUserLogInDto extends PartialType(UserLogInDto) {
  email: string;
  password: string;
}
