import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from 'src/user/entities/user.entity';

@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  id: string | number;

  @Column()
  title: string;

  @Column()
  trailer: string;

  @Column()
  publishYear: number;

  @Column()
  cast: string;

  @Column()
  duration: string;

  @Column()
  ageRestriction: string;

  @Column()
  synopsis: string;

  @Column({ nullable: true })
  coverImage: string;

  @Column()
  category: string;

  @ManyToOne(() => User, (user) => user.movies)
  user: User;
}
