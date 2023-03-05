import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { DistritoDto } from "../dto/distrito.dto";
import { ProductoPedidoService } from "../services/producto-pedido.service";
import { ProductoPedidoDto } from "../dto/producto-pedido.dto";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("producto-pedido")
@Controller('producto-pedido')
export class ProductoPedidoController {
	constructor(
		private readonly iProductoPedido: ProductoPedidoService
	) {
	}
	@Get("")
	async getAll() {
		return this.iProductoPedido.getAll();
	}

	@Get(":id")
	async getById(@Param("id") id: string) {
		return this.iProductoPedido.getById(id);
	}

	@Post("")
	async save(@Body() dto: ProductoPedidoDto) {
		return this.iProductoPedido.save(dto);
	}

	@Put(":id")
	async updateById(@Param("id") id: string, @Body() dto: ProductoPedidoDto) {
		return this.iProductoPedido.updateById(id, dto);
	}

	@Delete(":id")
	async deleteById(@Param("id") id: string) {
		return this.iProductoPedido.deleteById(id);
	}
}
