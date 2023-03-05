import { Test, TestingModule } from '@nestjs/testing';
import { ProductoPuntoVentaController } from './producto-punto-venta.controller';

describe('ProductoPuntoVentaController', () => {
  let controller: ProductoPuntoVentaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductoPuntoVentaController],
    }).compile();

    controller = module.get<ProductoPuntoVentaController>(ProductoPuntoVentaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
