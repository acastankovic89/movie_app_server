import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Movie } from 'src/movies/entities/movie.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  email: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  password: string;

  @Column()
  token: string;

  @Column()
  phoneNumber: string;

  @OneToMany(() => Movie, (movie) => movie.user)
  movies: Movie[];
}
