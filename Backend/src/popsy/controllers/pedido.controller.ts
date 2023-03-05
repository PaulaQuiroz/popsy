import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { PedidoService } from "../services/pedido.service";
import { PedidoDto } from "../dto/pedido.dto";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("pedido")
@Controller("pedido")
export class PedidoController {
	constructor(
		private readonly iPedidoService: PedidoService
	) {
	}

	@Get("")
	async getAll() {
		return this.iPedidoService.getAll();
	}

	@Get(":id")
	async getById(@Param("id") id: string) {
		return this.iPedidoService.getById(id);
	}

	@Post("")
	async save(@Body() dto: PedidoDto) {
		return this.iPedidoService.save(dto);
	}

	@Put(":id")
	async updateById(@Param("id") id: string, @Body() dto: PedidoDto) {
		return this.iPedidoService.updateById(id, dto);
	}

	@Delete(":id")
	async deleteById(@Param("id") id: string) {
		return this.iPedidoService.deleteById(id);
	}
}
