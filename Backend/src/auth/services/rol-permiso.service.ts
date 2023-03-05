import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { RolPermisoDto } from "../dto/rol-permiso.dto";
import { RolPermisoEntity } from "../entities/rol-permiso.entity";
import { PermisoService } from "./permiso.service";
import { RolService } from "./rol.service";

@Injectable()
export class RolPermisoService {
	constructor(
		@Inject("ROL_PERMISO_REPOSITORY")
		private readonly rolPermisoRepository: Repository<RolPermisoEntity>,
		private readonly iPermisoService: PermisoService,
		private readonly iRolService: RolService
	) {
	}

	async getAll(): Promise<RolPermisoEntity[]> {
		return await this.rolPermisoRepository.find();
	}

	async getById(id: string): Promise<RolPermisoEntity | null> {
		return await this.rolPermisoRepository.findOneBy({
			id
		});
	}

	async save(dto: RolPermisoDto): Promise<RolPermisoEntity> {
		return this.rolPermisoRepository.save(await this.getData(dto));
	}

	async updateById(id: string, dto: RolPermisoDto): Promise<RolPermisoEntity | null> {
		await this.rolPermisoRepository.update(id, await this.getData(dto));
		return this.getById(id);
	}

	async getData(dto: RolPermisoDto) {
		return {
			...dto,
			rolId: undefined,
			rol: await this.iRolService.getById(dto.rolId),
			permisoId: undefined,
			permiso: await this.iPermisoService.getById(dto.permisoId)
		};
	}

	async deleteById(id: string): Promise<boolean> {
		await this.rolPermisoRepository.delete(id);
		return true;
	}
}
