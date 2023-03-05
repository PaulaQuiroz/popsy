import { Test, TestingModule } from '@nestjs/testing';
import { ProductoFactorConversionService } from './producto-factor-conversion.service';

describe('ProductoFactorConversionService', () => {
  let service: ProductoFactorConversionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductoFactorConversionService],
    }).compile();

    service = module.get<ProductoFactorConversionService>(ProductoFactorConversionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
