import { Test, TestingModule } from '@nestjs/testing';
import { LoginAdminUserController } from './login-admin-user.controller';
import { LoginAdminUserService } from './login-admin-user.service';

describe('LoginAdminUserController', () => {
  let controller: LoginAdminUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LoginAdminUserController],
      providers: [LoginAdminUserService],
    }).compile();

    controller = module.get<LoginAdminUserController>(LoginAdminUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
