import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ProductoService } from "../services/producto.service";
import { ProductoDto } from "../dto/producto.dto";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("producto")
@Controller("producto")
export class ProductoController {
	constructor(
		private readonly iProductoService: ProductoService
	) {
	}

	@Get("/")
	async getAllProducts() {
		return this.iProductoService.getAll();
	}

	@Get("/:id")
	async getProductById(@Param("id") id: string) {
		return this.iProductoService.getById(id);
	}

	@Post()
	save(@Body() dto: ProductoDto) {
		return this.iProductoService.save(dto);
	}

	@Put("/:id")
	updateById(@Param("id") id: string, @Body() dto: ProductoDto) {
		return this.iProductoService.updateById(id, dto);
	}

	@Delete("/:id")
	async deleteById(@Param("id") id: string) {
		return this.iProductoService.deleteById(id);
	}
}
