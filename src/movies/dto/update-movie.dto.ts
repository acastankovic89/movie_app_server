import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDto } from './create-movie.dto';

export class UpdateMovieDto extends PartialType(CreateMovieDto) {
  id: any;
  title: string;
  trailer: string;
  publishYear: number;
  cast: string;
  duration: string;
  ageRestriction: string;
  synopsis: string;
  coverImage: string;
  category: string;
}
