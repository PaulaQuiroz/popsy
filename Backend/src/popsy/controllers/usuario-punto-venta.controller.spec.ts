import { Test, TestingModule } from '@nestjs/testing';
import { UsuarioPuntoVentaController } from './usuario-punto-venta.controller';

describe('UsuarioPuntoVentaController', () => {
  let controller: UsuarioPuntoVentaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsuarioPuntoVentaController],
    }).compile();

    controller = module.get<UsuarioPuntoVentaController>(UsuarioPuntoVentaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
