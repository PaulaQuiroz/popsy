import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { DistritoDto } from "../dto/distrito.dto";
import { TipoPedidoService } from "../services/tipo-pedido.service";
import { TipoPedidoDto } from "../dto/tipo-pedido.dto";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("tipo-pedido")
@Controller('tipo-pedido')
export class TipoPedidoController {
	constructor(
		private readonly iTipoPedidoService: TipoPedidoService
	) {
	}
	@Get("")
	async getAll() {
		return this.iTipoPedidoService.getAll();
	}

	@Get(":id")
	async getById(@Param("id") id: string) {
		return this.iTipoPedidoService.getById(id);
	}

	@Post("")
	async save(@Body() dto: TipoPedidoDto) {
		return this.iTipoPedidoService.save(dto);
	}

	@Put(":id")
	async updateById(@Param("id") id: string, @Body() dto: TipoPedidoDto) {
		return this.iTipoPedidoService.updateById(id, dto);
	}

	@Delete(":id")
	async deleteById(@Param("id") id: string) {
		return this.iTipoPedidoService.deleteById(id);
	}
}
