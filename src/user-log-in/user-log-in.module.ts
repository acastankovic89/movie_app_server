import { Module } from '@nestjs/common';
import { UserLogInService } from './user-log-in.service';
import { UserLogInController } from './user-log-in.controller';
import { TypeORMError } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserLogInController],
  providers: [UserLogInService],
})
export class UserLogInModule {}
