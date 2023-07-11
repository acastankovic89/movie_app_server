import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  Put,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Post()
  create(@Body() body: CreateMovieDto) {
    return this.moviesService.create(body);
  }

  @Get()
  findAll() {
    return this.moviesService.findAll();
  }

  @Get('comedy')
  findAllComedy() {
    return this.moviesService.findAllComedy();
  }

  @Get('thriler')
  findAllThriler() {
    return this.moviesService.findAllThriler();
  }

  @Get('fantasy')
  findAllFantasy() {
    return this.moviesService.findAllFantasy();
  }

  @Get('romance')
  findAllRomance() {
    return this.moviesService.findAllRomance();
  }

  @Get('mystery')
  findAllMystery() {
    return this.moviesService.findAllMystery();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.moviesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMovieDto: UpdateMovieDto) {
    return this.moviesService.update(+id, updateMovieDto);
  }

  @Put()
  updateMovie(@Body() body: UpdateMovieDto) {
    console.log('body', body);
    return this.moviesService.updateMovie(body);
  }

  @Delete(':id')
  deleteMovie(@Param('id') id: string) {
    return this.moviesService.deleteMovie(id);
  }
}
