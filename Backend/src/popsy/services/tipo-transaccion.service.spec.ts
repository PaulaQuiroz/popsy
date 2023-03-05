import { Test, TestingModule } from '@nestjs/testing';
import { TipoTransaccionService } from './tipo-transaccion.service';

describe('TipoTransaccionService', () => {
  let service: TipoTransaccionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipoTransaccionService],
    }).compile();

    service = module.get<TipoTransaccionService>(TipoTransaccionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
