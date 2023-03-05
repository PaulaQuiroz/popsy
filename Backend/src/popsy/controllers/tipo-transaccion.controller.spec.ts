import { Test, TestingModule } from '@nestjs/testing';
import { TipoTransaccionController } from './tipo-transaccion.controller';

describe('TipoTransaccionController', () => {
  let controller: TipoTransaccionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipoTransaccionController],
    }).compile();

    controller = module.get<TipoTransaccionController>(TipoTransaccionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
