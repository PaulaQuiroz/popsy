import { Test, TestingModule } from '@nestjs/testing';
import { TipoPedidoController } from './tipo-pedido.controller';

describe('TipoPedidoController', () => {
  let controller: TipoPedidoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipoPedidoController],
    }).compile();

    controller = module.get<TipoPedidoController>(TipoPedidoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
