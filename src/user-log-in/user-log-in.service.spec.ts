import { Test, TestingModule } from '@nestjs/testing';
import { UserLogInService } from './user-log-in.service';

describe('UserLogInService', () => {
  let service: UserLogInService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserLogInService],
    }).compile();

    service = module.get<UserLogInService>(UserLogInService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
