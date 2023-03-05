import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TipoTransaccionDto } from '../dto/tipo-transaccion.dto';
import { TipoTransaccionService } from '../services/tipo-transaccion.service';

@Controller('tipo-transaccion')
export class TipoTransaccionController {
    constructor(
		private readonly iTipoTransaccionService: TipoTransaccionService
	) {
	}

	@Get("")
	async getAll() {
		return this.iTipoTransaccionService.getAll();
	}

	@Get(":id")
	async getById(@Param("id") id: string) {
		return this.iTipoTransaccionService.getById(id);
	}

	@Post("")
	async save(@Body() dto: TipoTransaccionDto) {
		return this.iTipoTransaccionService.save(dto);
	}

	@Put(":id")
	async updateById(@Param("id") id: string, @Body() dto: TipoTransaccionDto) {
		return this.iTipoTransaccionService.updateById(id, dto);
	}

	@Delete(":id")
	async deleteById(@Param("id") id: string) {
		return this.iTipoTransaccionService.deleteById(id);
	}
}
