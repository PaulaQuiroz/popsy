import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { PuntoVentaEntity } from "../entities/punto-venta.entity";
import { PuntoVentaDto } from "../dto/punto-venta.dto";
import { DistritoService } from "./distrito.service";

@Injectable()
export class PuntoVentaService {
	constructor(
		@Inject("PUNTO_VENTA_REPOSITORY")
		private readonly iPuntoVentaRepository: Repository<PuntoVentaEntity>,
		private readonly iDistritoService: DistritoService
	) {
	}

	async getAll(): Promise<PuntoVentaEntity[]> {
		return await this.iPuntoVentaRepository.find();
	}

	async getById(id: string): Promise<PuntoVentaEntity | null> {
		return await this.iPuntoVentaRepository.findOneBy({
			id
		});
	}

	async save(dto: PuntoVentaDto): Promise<PuntoVentaEntity> {
		return await this.iPuntoVentaRepository.save(await this.getData(dto));
	}

	async updateById(id: string, dto: PuntoVentaDto): Promise<PuntoVentaEntity> {
		await this.iPuntoVentaRepository.update(id, await this.getData(dto));

		return this.getById(id);
	}

	async getData(dto: PuntoVentaDto) {
		return {
			...dto,
			distritoId: undefined,
			distrito: await this.iDistritoService.getById(dto.distritoId)
		};
	}

	async deleteById(id: string): Promise<boolean> {
		await this.iPuntoVentaRepository.softDelete(id);
		return true;
	}
}
