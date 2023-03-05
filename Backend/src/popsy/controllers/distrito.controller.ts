import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { DistritoService } from "../services/distrito.service";
import { DistritoDto } from "../dto/distrito.dto";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("distrito")
@Controller("distrito")
export class DistritoController {
	constructor(
		private readonly iDistritoService: DistritoService
	) {
	}

	@Get("")
	async getAll() {
		return this.iDistritoService.getAll();
	}

	@Get(":id")
	async getById(@Param("id") id: string) {
		return this.iDistritoService.getById(id);
	}

	@Post("")
	async save(@Body() dto: DistritoDto) {
		return this.iDistritoService.save(dto);
	}

	@Put(":id")
	async updateById(@Param("id") id: string, @Body() dto: DistritoDto) {
		return this.iDistritoService.updateById(id, dto);
	}

	@Delete(":id")
	async deleteById(@Param("id") id: string) {
		return this.iDistritoService.deleteById(id);
	}
}
