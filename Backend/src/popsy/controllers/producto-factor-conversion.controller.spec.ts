import { Test, TestingModule } from '@nestjs/testing';
import { ProductoFactorConversionController } from './producto-factor-conversion.controller';

describe('ProductoFactorConversionController', () => {
  let controller: ProductoFactorConversionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductoFactorConversionController],
    }).compile();

    controller = module.get<ProductoFactorConversionController>(ProductoFactorConversionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
