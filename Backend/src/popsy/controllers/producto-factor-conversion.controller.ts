import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductoFactorConversionDto } from '../dto/producto-factor-conversion.dto';
import { ProductoFactorConversionService } from '../services/producto-factor-conversion.service';

@Controller('producto-factor-conversion')
export class ProductoFactorConversionController {
    constructor(
		private readonly iProductoFactorConversionService: ProductoFactorConversionService
	) {
	}

	@Get("")
	async getAll() {
		return this.iProductoFactorConversionService.getAll();
	}

	@Get(":id")
	async getById(@Param("id") id: string) {
		return this.iProductoFactorConversionService.getById(id);
	}

	@Post("")
	async save(@Body() dto: ProductoFactorConversionDto) {
		return this.iProductoFactorConversionService.save(dto);
	}

	@Put(":id")
	async updateById(@Param("id") id: string, @Body() dto: ProductoFactorConversionDto) {
		return this.iProductoFactorConversionService.updateById(id, dto);
	}

	@Delete(":id")
	async deleteById(@Param("id") id: string) {
		return this.iProductoFactorConversionService.deleteById(id);
	}
}
