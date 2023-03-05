import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TransaccionDto } from '../dto/transaccion.dto';
import { TransaccionService } from '../services/transaccion.service';

@ApiTags("transaccion")
@Controller('transaccion')
export class TransaccionController {
    constructor(
		private readonly iTransaccionService: TransaccionService
	) {
	}

	@Get("")
	async getAll() {
		return this.iTransaccionService.getAll();
	}

	@Get(":id")
	async getById(@Param("id") id: string) {
		return this.iTransaccionService.getById(id);
	}

	@Post("")
	async save(@Body() dto: TransaccionDto) {
		return this.iTransaccionService.save(dto);
	}

	@Put(":id")
	async updateById(@Param("id") id: string, @Body() dto: TransaccionDto) {
		return this.iTransaccionService.updateById(id, dto);
	}

	@Delete(":id")
	async deleteById(@Param("id") id: string) {
		return this.iTransaccionService.deleteById(id);
	}
}
