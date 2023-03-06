import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from "@nestjs/common";
import { DistritoDto } from "../dto/distrito.dto";
import { UsuarioPuntoVentaService } from "../services/usuario-punto-venta.service";
import { UsuarioPuntoVentaDto, UsuarioPuntoVentaMasivoDto } from "../dto/usuario-punto-venta.dto";
import { ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";

@ApiTags("usuario-punto-venta")
@Controller('usuario-punto-venta')
export class UsuarioPuntoVentaController {
	constructor(
		private readonly iUsuarioPuntoVentaService: UsuarioPuntoVentaService
	) {
	}
	@Get("")
	async getAll() {
		return this.iUsuarioPuntoVentaService.getAll();
	}

	@UseGuards(JwtAuthGuard)
	@Get("usuario")
	async getByUsuario(@Req() req) {
		let currentUser = req.user;
		let oPuntosVenta = (await this.iUsuarioPuntoVentaService.getByUsuario(currentUser.id))
			.map(oItem => oItem.puntoVenta);
		return {
			...currentUser,
			oPuntosVenta: oPuntosVenta,
			oPuntoVenta: oPuntosVenta[0]
		}
	}

	@Get(":id")
	async getById(@Param("id") id: string) {
		return this.iUsuarioPuntoVentaService.getById(id);
	}

	@Post("")
	async save(@Body() dto: UsuarioPuntoVentaDto) {
		return this.iUsuarioPuntoVentaService.save(dto);
	}

	@Post("masivo")
	async saveMasivo(@Body() dto: UsuarioPuntoVentaMasivoDto) {
		let result = [];
		
		for(let i = 0; i < dto.puntosVentaId.length; i++){
			result.push(await this.iUsuarioPuntoVentaService.save({
				usuarioId: dto.usuarioId,
				puntoVentaId: dto.puntosVentaId[i]
			}));
		}

		return result;
	}

	@Put(":id")
	async updateById(@Param("id") id: string, @Body() dto: UsuarioPuntoVentaDto) {
		return this.iUsuarioPuntoVentaService.updateById(id, dto);
	}

	@Delete(":id")
	async deleteById(@Param("id") id: string) {
		return this.iUsuarioPuntoVentaService.deleteById(id);
	}
}
