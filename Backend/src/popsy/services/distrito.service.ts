import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { DistritoDto } from "../dto/distrito.dto";
import { DistritoEntity } from "../entities/distrito.entity";
import { OrganizacionVentaService } from "./organizacion-venta.service";

@Injectable()
export class DistritoService {
	constructor(
		@Inject("DISTRITO_REPOSITORY")
		private readonly idistritoRepository: Repository<DistritoEntity>,
		private readonly iOrganizacionVentaService: OrganizacionVentaService
	) {
	}

	async getAll(): Promise<DistritoEntity[]> {
		return await this.idistritoRepository.find({});
	}

	async getById(id: string): Promise<DistritoEntity | null> {
		return await this.idistritoRepository.findOneBy({
			id
		});
	}

	async getByOrganizacionVenta(idOrganizacionVenta: string): Promise<DistritoEntity[]> {
		return await this.idistritoRepository.find({
			where: {
				organizacionVenta: {
					id: idOrganizacionVenta
				}
			}
		});
	}

	async save(dto: DistritoDto): Promise<DistritoEntity> {
		return await this.idistritoRepository.save(await this.getData(dto));
	}

	async updateById(id: string, dto: DistritoDto): Promise<DistritoEntity> {
		await this.idistritoRepository.update(id, await this.getData(dto));
		return await this.getById(id);
	}

	async getData(dto: DistritoDto) {
		return {
			...dto,
			organizacionVentaId: undefined,
			organizacionVenta: await this.iOrganizacionVentaService.getById(dto.organizacionVentaId)
		};
	}

	async deleteById(id: string): Promise<boolean> {
		await this.idistritoRepository.softDelete(id);
		return true;
	}
}
