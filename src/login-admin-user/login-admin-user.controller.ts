import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LoginAdminUserService } from './login-admin-user.service';
import { LoginAdminUserDto } from './dto/login-admin-user.dto';
import { UpdateLoginAdminUserDto } from './dto/update-login-admin-user.dto';

@Controller('login-admin-user')
export class LoginAdminUserController {
  constructor(private readonly loginAdminUserService: LoginAdminUserService) {}

  @Post()
  logIn(@Body() body: LoginAdminUserDto) {
    return this.loginAdminUserService.logIn(body);
  }

  @Get()
  findAll() {
    return this.loginAdminUserService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.loginAdminUserService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateLoginAdminUserDto: UpdateLoginAdminUserDto,
  ) {
    return this.loginAdminUserService.update(+id, updateLoginAdminUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.loginAdminUserService.remove(+id);
  }
}
