import { Test, TestingModule } from '@nestjs/testing';
import { TestApiService } from './test-api.service';

describe('TestApiService', () => {
  let service: TestApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestApiService],
    }).compile();

    service = module.get<TestApiService>(TestApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
