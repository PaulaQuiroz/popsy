import { Test, TestingModule } from '@nestjs/testing';
import { ErrorTransaccionService } from './error-transaccion.service';

describe('ErrorTransaccionService', () => {
  let service: ErrorTransaccionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ErrorTransaccionService],
    }).compile();

    service = module.get<ErrorTransaccionService>(ErrorTransaccionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
