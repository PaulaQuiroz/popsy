import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { OrganizacionVentaService } from "../services/organizacion-venta.service";
import { OrganizacionVentaDto } from "../dto/organizacion-venta.dto";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("organizacion-ventas")
@Controller("organizacion-ventas")
export class OrganizacionVentaController {
	constructor(
		private readonly iOrganizacionVentaService: OrganizacionVentaService
	) {
	}

	@Get("")
	async getAll() {
		return this.iOrganizacionVentaService.getAll();
	}

	@Get(":id")
	async getById(@Param("id") id: string) {
		return this.iOrganizacionVentaService.getById(id);
	}

	@Post("")
	async save(@Body() dto: OrganizacionVentaDto) {
		return this.iOrganizacionVentaService.save(dto);
	}

	@Put(":id")
	async updateById(@Param("id") id: string, @Body() dto: OrganizacionVentaDto) {
		return this.iOrganizacionVentaService.updateById(id, dto);
	}

	@Delete(":id")
	async deleteById(@Param("id") id: string) {
		return this.iOrganizacionVentaService.deleteById(id);
	}
}
