import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { EstadoPedidoService } from "../services/estado-pedido.service";
import { EstadoPedidoDto } from "../dto/estado-pedido.dto";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("estado-pedido")
@Controller("estado-pedido")
export class EstadoPedidoController {
	constructor(
		private readonly iEstadoPedidoService: EstadoPedidoService
	) {
	}

	@Get("")
	async getAll() {
		return this.iEstadoPedidoService.getAll();
	}

	@Get(":id")
	async getById(@Param("id") id: string) {
		return this.iEstadoPedidoService.getById(id);
	}

	@Post("")
	async save(@Body() dto: EstadoPedidoDto) {
		return this.iEstadoPedidoService.save(dto);
	}

	@Put(":id")
	async updateById(@Param("id") id: string, @Body() dto: EstadoPedidoDto) {
		return this.iEstadoPedidoService.updateById(id, dto);
	}

	@Delete(":id")
	async deleteById(@Param("id") id: string) {
		return this.iEstadoPedidoService.deleteById(id);
	}
}
