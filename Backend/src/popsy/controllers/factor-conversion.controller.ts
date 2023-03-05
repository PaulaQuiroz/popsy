import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { FactorConversionService } from "../services/factor-conversion.service";
import { FactorConversionDto } from "../dto/factor-conversion.dto";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("factor-conversion")
@Controller("factor-conversion")
export class FactorConversionController {
	constructor(
		private readonly iFactorConversionService: FactorConversionService
	) {
	}

	@Get("")
	async getAll() {
		return this.iFactorConversionService.getAll();
	}

	@Get(":id")
	async getById(@Param("id") id: string) {
		return this.iFactorConversionService.getById(id);
	}

	@Post("")
	async save(@Body() dto: FactorConversionDto) {
		return this.iFactorConversionService.save(dto);
	}

	@Put(":id")
	async updateById(@Param("id") id: string, @Body() dto: FactorConversionDto) {
		return this.iFactorConversionService.updateById(id, dto);
	}

	@Delete(":id")
	async deleteById(@Param("id") id: string) {
		return this.iFactorConversionService.deleteById(id);
	}
}
