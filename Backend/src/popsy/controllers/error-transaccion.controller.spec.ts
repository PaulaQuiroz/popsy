import { Test, TestingModule } from '@nestjs/testing';
import { ErrorTransaccionController } from './error-transaccion.controller';

describe('ErrorTransaccionController', () => {
  let controller: ErrorTransaccionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ErrorTransaccionController],
    }).compile();

    controller = module.get<ErrorTransaccionController>(ErrorTransaccionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
