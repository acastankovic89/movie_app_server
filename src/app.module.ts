import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogModule } from './blog/blog.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Blog } from './blog/entities/blog.entity';
import { AdminUserModule } from './admin-user/admin-user.module';
import { AdminUser } from './admin-user/entities/admin-user.entity';
import { LoginAdminUserModule } from './login-admin-user/login-admin-user.module';
import { MoviesModule } from './movies/movies.module';
import { Movie } from './movies/entities/movie.entity';
import { User } from './user/entities/user.entity';
import { FileUploadModule } from './file-upload/file-upload.module';
import { UserModule } from './user/user.module';
import { UserLogInModule } from './user-log-in/user-log-in.module';
import { EmailsModule } from './emails/emails.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      //host: '192.168.1.128',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'admin',
      database: 'movie_app',
      entities: [Blog, AdminUser, Movie, User],
      synchronize: true,
    }),
    BlogModule,
    AdminUserModule,
    LoginAdminUserModule,
    MoviesModule,
    FileUploadModule,
    UserModule,
    UserLogInModule,
    EmailsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
