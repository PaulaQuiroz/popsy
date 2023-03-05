import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { DistritoDto } from "../dto/distrito.dto";
import { ProductoPuntoVentaService } from "../services/producto-punto-venta.service";
import { ProductoPuntoVentaDto } from "../dto/producto-punto-venta.dto";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("producto-punto-venta")
@Controller('producto-punto-venta')
export class ProductoPuntoVentaController {
	constructor(
		private readonly iProductoPuntoVenta: ProductoPuntoVentaService
	) {
	}
	@Get("")
	async getAll() {
		return this.iProductoPuntoVenta.getAll();
	}

	@Get("/byCategoria/:categoria/:idPuntoVenta")
	async getAllByCategoria(@Param("categoria") categoria: string, @Param("idPuntoVenta") idPuntoVenta: string) {
		return this.iProductoPuntoVenta.getAllByCategoriaAndPuntoVenta(categoria, idPuntoVenta);
	}

	@Get("/categorias/:idPuntoVenta")
	getAllCategorias(@Param("idPuntoVenta") idPuntoVenta: string) {
		return this.iProductoPuntoVenta.getAllCategoriasByPuntoVenta(idPuntoVenta);
	}

	@Get(":id")
	async getById(@Param("id") id: string) {
		return this.iProductoPuntoVenta.getById(id);
	}

	@Post("")
	async save(@Body() dto: ProductoPuntoVentaDto) {
		return this.iProductoPuntoVenta.save(dto);
	}

	@Put(":id")
	async updateById(@Param("id") id: string, @Body() dto: ProductoPuntoVentaDto) {
		return this.iProductoPuntoVenta.updateById(id, dto);
	}

	@Delete(":id")
	async deleteById(@Param("id") id: string) {
		return this.iProductoPuntoVenta.deleteById(id);
	}
}
