import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { FactorConversionDto } from "../dto/factor-conversion.dto";
import { FactorConversionEntity } from "../entities/factor-conversion.entity";
import { ProductoService } from "./producto.service";

@Injectable()
export class FactorConversionService {
	constructor(
		@Inject("FACTOR_CONVERSION_REPOSITORY")
		private readonly iFactorConversionRepository: Repository<FactorConversionEntity>,
		) {
	}

	async getAll(): Promise<FactorConversionEntity[]> {
		return await this.iFactorConversionRepository.find();
	}

	async getById(id: string): Promise<FactorConversionEntity | null> {
		return await this.iFactorConversionRepository.findOneBy({
			id
		});
	}

	async save(dto: FactorConversionDto): Promise<FactorConversionEntity> {
		return await this.iFactorConversionRepository.save(dto);
	}

	async updateById(id: string, dto: FactorConversionDto): Promise<FactorConversionEntity> {
		await this.iFactorConversionRepository.update(id, dto);

		return this.getById(id);
	}

	async deleteById(id: string): Promise<boolean> {
		await this.iFactorConversionRepository.softDelete(id);
		return true;
	}
}
