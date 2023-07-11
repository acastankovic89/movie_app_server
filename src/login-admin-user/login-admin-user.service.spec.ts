import { Test, TestingModule } from '@nestjs/testing';
import { LoginAdminUserService } from './login-admin-user.service';

describe('LoginAdminUserService', () => {
  let service: LoginAdminUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoginAdminUserService],
    }).compile();

    service = module.get<LoginAdminUserService>(LoginAdminUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
