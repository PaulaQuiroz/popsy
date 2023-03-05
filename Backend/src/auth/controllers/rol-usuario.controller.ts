import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UsuarioRolDto } from '../dto/usuario-rol.dto';
import { UsuarioRolService } from '../services/usuario-rol.service';

@ApiTags("rol-usuario")
@Controller('rol-usuario')
export class RolUsuarioController {
    constructor(
        private readonly iRolUsuarioService: UsuarioRolService
    ){}

    @Get()
	findAll() {
		return this.iRolUsuarioService.getAll();
	}

	@Get("/:id")
	findById(@Param("id") id: string) {
		return this.iRolUsuarioService.getById(id);
	}

	@Post("")
	save(@Body() usuarioRolDto: UsuarioRolDto) {
		return this.iRolUsuarioService.save(usuarioRolDto);
	}

	@Put("/:id")
	updateById(@Param("id") id: string, @Body() usuarioRolDto: UsuarioRolDto) {
		return this.iRolUsuarioService.updateById(id, usuarioRolDto);
	}

	@Delete("/:id")
	deleteById(@Param("id") id: string) {
		return this.iRolUsuarioService.deleteById(id);
	}
}
