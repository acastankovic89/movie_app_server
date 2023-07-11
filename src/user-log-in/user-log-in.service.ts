import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { UserLogInDto } from './dto/user-log-in.dto';
import { UpdateUserLogInDto } from './dto/update-user-log-in.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { response } from 'express';

@Injectable()
export class UserLogInService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async logInUser(UserLogInDto: UserLogInDto) {
    console.log('UserLogInDto', UserLogInDto);
    try {
      const findUser = await this.userRepository.findOne({
        where: {
          email: UserLogInDto.email,
        },
      });

      const findUserMovies = await this.userRepository.findOne({
        where: {
          email: UserLogInDto.email,
        },
        relations: ['movies'],
      });
      console.log('findUserPass', findUser);
      const isMatch = await bcrypt.compare(
        UserLogInDto.password,
        findUser.password,
      );
      console.log('ismatch', isMatch);
      if (isMatch) {
        return {
          message: 'User succesfly sign in.',
          response: [findUser, findUserMovies.movies],
          status: 200,
        };
      } else {
        return new HttpException(
          'Password or username are not correct!',
          HttpStatus.NOT_FOUND,
        );
      }
    } catch (error) {
      throw error;
    }
  }

  create(UserLogInDto: UserLogInDto) {
    return 'This action adds a new userLogIn';
  }

  findAll() {
    return `This action returns all userLogIn`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userLogIn`;
  }

  update(id: number, updateUserLogInDto: UpdateUserLogInDto) {
    return `This action updates a #${id} userLogIn`;
  }

  remove(id: number) {
    return `This action removes a #${id} userLogIn`;
  }
}
