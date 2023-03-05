import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ErrorTransaccionDto } from '../dto/error-transaccion.dto';
import { ErrorTransaccionService } from '../services/error-transaccion.service';

@Controller('error-transaccion')
export class ErrorTransaccionController {
    constructor(
		private readonly iErrorTransaccionService: ErrorTransaccionService
	) {
	}

	@Get("")
	async getAll() {
		return this.iErrorTransaccionService.getAll();
	}

	@Get(":id")
	async getById(@Param("id") id: string) {
		return this.iErrorTransaccionService.getById(id);
	}

	@Post("")
	async save(@Body() dto: ErrorTransaccionDto) {
		return this.iErrorTransaccionService.save(dto);
	}

	@Put(":id")
	async updateById(@Param("id") id: string, @Body() dto: ErrorTransaccionDto) {
		return this.iErrorTransaccionService.updateById(id, dto);
	}

	@Delete(":id")
	async deleteById(@Param("id") id: string) {
		return this.iErrorTransaccionService.deleteById(id);
	}
}
