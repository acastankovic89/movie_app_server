import { Injectable } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Repository } from 'typeorm';
import { Movie } from './entities/movie.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movie)
    private movieRepository: Repository<Movie>,
  ) {}
  async create(body: CreateMovieDto) {
    console.log('body', body);
    try {
      const addMovie = await this.movieRepository.save(body);
      console.log('Movie added successfully');
      return {
        message: 'Movie added successfully',
        response: addMovie,
      };
    } catch (error) {}
    return 'This action adds a new movie';
  }

  async findAll() {
    try {
      const movies = await this.movieRepository.find();
      return {
        message: `This action returns all movies`,
        response: movies,
        status: 200,
      };
    } catch (error) {
      return {
        message: `No movies find`,
        status: 404,
      };
    }
  }

  async findAllComedy() {
    try {
      const comedyMovies = await this.movieRepository.find({
        where: { category: 'Comedy' },
      });
      return {
        message: 'This returns all comedy movies',
        response: comedyMovies,
        status: 200,
      };
    } catch (error) {
      return {
        message: `No movies find`,
        status: 404,
      };
    }
  }

  async findAllThriler() {
    try {
      const comedyMovies = await this.movieRepository.find({
        where: { category: 'Thriller' },
      });
      return {
        message: 'This returns all comedy movies',
        response: comedyMovies,
        status: 200,
      };
    } catch (error) {
      return {
        message: `No movies find`,
        status: 404,
      };
    }
  }

  async findAllFantasy() {
    try {
      const comedyMovies = await this.movieRepository.find({
        where: { category: 'Fantasy' },
      });
      return {
        message: 'This returns all fantasy movies',
        response: comedyMovies,
        status: 200,
      };
    } catch (error) {
      return {
        message: `No movies find`,
        status: 404,
      };
    }
  }

  async findAllRomance() {
    try {
      const movies = await this.movieRepository.find({
        where: { category: 'Romance' },
      });
      return {
        message: 'This returns all romance movies',
        response: movies,
        status: 200,
      };
    } catch (error) {
      return {
        message: `No movies find`,
        status: 404,
      };
    }
  }

  async findAllMystery() {
    try {
      const movies = await this.movieRepository.find({
        where: { category: 'Mystery' },
      });
      return {
        message: 'This returns all mystery movies',
        response: movies,
        status: 200,
      };
    } catch (error) {
      return {
        message: `No movies find`,
        status: 404,
      };
    }
  }

  async findOne(id: string) {
    try {
      const findOneMovie = await this.movieRepository.findOne({
        where: { id: id },
      });
      if (findOneMovie) {
        return {
          message: 'Movie founded',
          staus: 200,
          response: findOneMovie,
        };
      }
    } catch (error) {
      if (error) throw error;
      return {
        message: 'Error',
        staus: 401,
      };
    }
  }

  async updateMovie(body: UpdateMovieDto) {
    try {
      const numId = parseInt(body.id);
      console.log('numId', numId);
      const movie = await this.movieRepository.findOne({
        where: { id: numId },
      });
      if (movie) {
        movie.title = body.title;
        movie.trailer = body.trailer;
        movie.publishYear = body.publishYear;
        movie.duration = body.duration;
        movie.ageRestriction = body.ageRestriction;
        movie.synopsis = body.synopsis;
        movie.category = body.category;
        if (body.coverImage !== '') {
          movie.coverImage = body.coverImage;
        }
        const updateMovie = await this.movieRepository.save(movie);
        return {
          message: 'Movie is updated!',
          status: 200,
          response: updateMovie,
        };
      }
      console.log('movie', movie);
    } catch (error) {
      if (error) throw error;
    }
  }

  update(id: number, updateMovieDto: UpdateMovieDto) {
    return `This action updates a #${id} movie`;
  }

  async deleteMovie(id: string) {
    try {
      const result = await this.movieRepository.delete(id);
      if (result.affected === 0) {
        throw new Error(`Movie with ID ${id} not found.`);
      }
      return {
        message: 'Movie id deleted',
        response: result,
      };
    } catch (error) {
      if (error) throw error;
      return `Error`;
    }
  }
}
