import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { RolDto } from '../dto/rol.dto';
import { RolService } from '../services/rol.service';

@ApiTags("rol")
@Controller('rol')
export class RolController {
    constructor(
        private readonly iRolService: RolService
    ){}

    @Get()
	findAll() {
		return this.iRolService.getAll();
	}

	@Get("/:id")
	findById(@Param("id") id: string) {
		return this.iRolService.getById(id);
	}

	@Post("")
	save(@Body() rolDto: RolDto) {
		return this.iRolService.save(rolDto);
	}

	@Put("/:id")
	updateById(@Param("id") id: string, @Body() rolDto: RolDto) {
		return this.iRolService.updateById(id, rolDto);
	}

	@Delete("/:id")
	deleteById(@Param("id") id: string) {
		return this.iRolService.deleteById(id);
	}
}
