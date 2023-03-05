import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { OrganizacionVentaDto } from "../dto/organizacion-venta.dto";
import { OrganizacionVentaEntity } from "../entities/organizacion-venta.entity";

@Injectable()
export class OrganizacionVentaService {
	constructor(
		@Inject("ORGANIZACION_VENTA_REPOSITORY")
		private readonly iOrganizacionVentaRepository: Repository<OrganizacionVentaEntity>
	) {
	}

	async getAll(): Promise<OrganizacionVentaEntity[]> {
		return await this.iOrganizacionVentaRepository.find();
	}

	async getById(id: string): Promise<OrganizacionVentaEntity | null> {
		return await this.iOrganizacionVentaRepository.findOneBy({
			id
		});
	}

	async save(dto: OrganizacionVentaDto): Promise<OrganizacionVentaEntity> {
		return await this.iOrganizacionVentaRepository.save(dto);
	}

	async updateById(id: string, dto: OrganizacionVentaDto): Promise<OrganizacionVentaEntity> {
		await this.iOrganizacionVentaRepository.update(id, dto);

		return this.getById(id);
	}

	async deleteById(id: string): Promise<boolean> {
		await this.iOrganizacionVentaRepository.softDelete(id);
		return true;
	}

}
