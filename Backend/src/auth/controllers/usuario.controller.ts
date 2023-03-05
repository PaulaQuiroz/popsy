import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UsuarioService } from "../services/usuario.service";
import { UsuarioDto } from "../dto/usuario.dto";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("usuario")
@Controller("usuario")
export class UsuarioController {
	constructor(
		private readonly usuarioService: UsuarioService
	) {
	}

	@Get()
	findAll() {
		return this.usuarioService.getAll();
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
