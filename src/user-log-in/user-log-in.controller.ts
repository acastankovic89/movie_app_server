import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserLogInService } from './user-log-in.service';
import { UserLogInDto } from './dto/user-log-in.dto';
import { UpdateUserLogInDto } from './dto/update-user-log-in.dto';

@Controller('user-log-in')
export class UserLogInController {
  constructor(private readonly userLogInService: UserLogInService) {}

  @Post()
  create(@Body() createUserLogInDto: UserLogInDto) {
    return this.userLogInService.logInUser(createUserLogInDto);
  }

  @Get()
  findAll() {
    return this.userLogInService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userLogInService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserLogInDto: UpdateUserLogInDto,
  ) {
    return this.userLogInService.update(+id, updateUserLogInDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userLogInService.remove(+id);
  }
}
