import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ProductoFactorConversionDto } from '../dto/producto-factor-conversion.dto';
import { ProductoFactorConversionEntity } from '../entities/producto-factor-conversion.entity';

@Injectable()
export class ProductoFactorConversionService {
    constructor(
		@Inject("PRODUCTO_FACTOR_CONVERSION_REPOSITORY")
		private readonly iProductoFactorConversionRepository: Repository<ProductoFactorConversionEntity>,
		) {
	}

	async getAll(): Promise<ProductoFactorConversionEntity[]> {
		return await this.iProductoFactorConversionRepository.find();
	}

	async getById(id: string): Promise<ProductoFactorConversionEntity | null> {
		return await this.iProductoFactorConversionRepository.findOneBy({
			id
		});
	}

	async save(dto: ProductoFactorConversionDto): Promise<ProductoFactorConversionEntity> {
		return await this.iProductoFactorConversionRepository.save(dto);
	}

	async updateById(id: string, dto: ProductoFactorConversionDto): Promise<ProductoFactorConversionEntity> {
		await this.iProductoFactorConversionRepository.update(id, dto);

		return this.getById(id);
	}

	async deleteById(id: string): Promise<boolean> {
		await this.iProductoFactorConversionRepository.softDelete(id);
		return true;
	}
}
