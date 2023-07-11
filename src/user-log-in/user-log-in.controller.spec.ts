import { Test, TestingModule } from '@nestjs/testing';
import { UserLogInController } from './user-log-in.controller';
import { UserLogInService } from './user-log-in.service';

describe('UserLogInController', () => {
  let controller: UserLogInController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserLogInController],
      providers: [UserLogInService],
    }).compile();

    controller = module.get<UserLogInController>(UserLogInController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
