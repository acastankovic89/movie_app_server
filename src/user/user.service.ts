import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Movie } from 'src/movies/entities/movie.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Movie)
    private movieRepository: Repository<Movie>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    try {
      console.log('createUserDto', createUserDto);
      const addUser = await this.userRepository.save(createUserDto);
      console.log('addUser', addUser);
      return {
        message: 'User sucessefly added! You can Sign In!',
        response: addUser,
      };
    } catch (error) {
      return {
        message: 'Internal server error',
      };
    }
  }

  async updateUserWithMovie(updateUserDto: UpdateUserDto) {
    const user = updateUserDto[1];
    const movie = updateUserDto[0];

    try {
      const foundUser = await this.userRepository.find({
        where: { id: user.id },
        relations: ['movies'],
      });

      if (foundUser.length > 0) {
        const userMovies = foundUser[0].movies;
        const foundMovie = userMovies.find((m) => m.id === movie.id);

        if (!foundMovie) {
          foundUser[0].movies.push(movie);
          const updateUser = await this.userRepository.save(foundUser[0]);
          console.log(updateUser);
          return {
            message: 'Added to user movie list',
            response: updateUser,
          };
        }
        return {
          message: `Movie is allready  on list`,
          response: movie,
        };
      }
    } catch (error) {}
    return 'Test';
  }

  async removeMovieFromUser(updateUserDto) {
    const user = updateUserDto[1];
    const movie = updateUserDto[0];

    try {
      const findUser = await this.userRepository.findOne({
        where: { id: user.id },
        relations: ['movies'],
      });

      findUser.movies = findUser.movies.filter((m) => m.id !== movie.id);
      await this.userRepository.save(findUser);
      console.log('find user updated', findUser);
    } catch (error) {
      if (error) throw error;
    }
    return `Movie removed from user`;
  }

  findAll() {
    return `This action returns all user`;
  }

  async findOne(id: string) {
    try {
      const findUser = await this.userRepository.find({
        where: { id: id },
        relations: ['movies'],
      });
      console.log('findUser', findUser);
      return {
        message: `User`,
        response: findUser[0],
      };
    } catch (error) {
      if (error) throw error;
    }
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
