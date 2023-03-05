import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { DistritoDto } from "../dto/distrito.dto";
import { PuntoVentaService } from "../services/punto-venta.service";
import { PuntoVentaDto } from "../dto/punto-venta.dto";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("punto-venta")
@Controller('punto-venta')
export class PuntoVentaController {
	constructor(
		private readonly iPuntoVentaService: PuntoVentaService
	) {
	}
	@Get("")
	async getAll() {
		return this.iPuntoVentaService.getAll();
	}

	@Get(":id")
	async getById(@Param("id") id: string) {
		return this.iPuntoVentaService.getById(id);
	}

	@Post("")
	async save(@Body() dto: PuntoVentaDto) {
		return this.iPuntoVentaService.save(dto);
	}

	@Put(":id")
	async updateById(@Param("id") id: string, @Body() dto: PuntoVentaDto) {
		return this.iPuntoVentaService.updateById(id, dto);
	}

	@Delete(":id")
	async deleteById(@Param("id") id: string) {
		return this.iPuntoVentaService.deleteById(id);
	}
}
