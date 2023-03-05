import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { PermisoDto } from "../dto/permiso.dto";
import { PermisoEntity } from "../entities/permiso.entity";

@Injectable()
export class PermisoService {
	constructor(
		@Inject("PERMISO_REPOSITORY")
		private readonly PermisoRepository: Repository<PermisoEntity>
	) {
	}

	async getAll(): Promise<PermisoEntity[]> {
		return await this.PermisoRepository.find();
	}

	async getById(id: string): Promise<PermisoEntity | null> {
		return await this.PermisoRepository.findOneBy({
			id
		});
	}

	async save(dto: PermisoDto): Promise<PermisoEntity> {
		return this.PermisoRepository.save(dto);
	}

	async updateById(id: string, dto: PermisoDto): Promise<PermisoEntity | null> {
		await this.PermisoRepository.update(id, dto);
		return this.getById(id);
	}

	async deleteById(id: string): Promise<boolean> {
		await this.PermisoRepository.delete(id);
		return true;
	}
}
