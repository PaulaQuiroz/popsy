import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { UsuarioService } from "../services/usuario.service";
import { UsuarioDto } from "../dto/usuario.dto";
import { ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "../guards/jwt-auth.guard";
import { UsuarioRolService } from "../services/usuario-rol.service";
import { Req } from "@nestjs/common/decorators";
import { RolEntity } from "../entities/rol.entity";

@ApiTags("usuario")
@Controller("usuario")
export class UsuarioController {
	constructor(
		private readonly usuarioService: UsuarioService,
		private readonly iUsuarioRolService: UsuarioRolService
	) {
	}

	@Get()
	findAll() {
		return this.usuarioService.getAll();
	}

	@Get("roles")
	@UseGuards(JwtAuthGuard)
	async findByUsuario(@Req() req) {
		let oRoles: RolEntity[] = 
			(await this.iUsuarioRolService.getByUsuario(req.user.id))
			.map(oItem => oItem.rol);
		return {
			...req.user,
			roles: oRoles.map(oItem => oItem.nombre),
			rolesDetalle: oRoles,
		};
	}

	@Get("/:id")
	findById(@Param("id") id: string) {
		return this.usuarioService.getById(id);
	}

	@Post("")
	save(@Body() usuarioDto: UsuarioDto) {
		return this.usuarioService.save(usuarioDto);
	}

	@Put("/:id")
	updateById(@Param("id") id: string, @Body() usuarioDto: UsuarioDto) {
		return this.usuarioService.updateById(id, usuarioDto);
	}

	@Delete("/:id")
	deleteById(@Param("id") id: string) {
		return this.usuarioService.deleteById(id);
	}
}
