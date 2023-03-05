import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { UsuarioRolDto } from "../dto/usuario-rol.dto";
import { UsuarioRolEntity } from "../entities/usuario-rol.entity";
import { UsuarioService } from "./usuario.service";
import { RolService } from "./rol.service";

@Injectable()
export class UsuarioRolService {
	constructor(
		@Inject("USUARIO_ROL_REPOSITORY")
		private readonly usuarioRolRepository: Repository<UsuarioRolEntity>,
		private readonly iUsuarioService: UsuarioService,
		private readonly iRolService: RolService
	) {
	}

	async getAll(): Promise<UsuarioRolEntity[]> {
		return await this.usuarioRolRepository.find();
	}

	async getById(id: string): Promise<UsuarioRolEntity | null> {
		return await this.usuarioRolRepository.findOneBy({
			id
		});
	}

	async save(dto: UsuarioRolDto): Promise<UsuarioRolEntity> {
		return this.usuarioRolRepository.save(await this.getData(dto));
	}

	async updateById(id: string, dto: UsuarioRolDto): Promise<UsuarioRolEntity | null> {
		await this.usuarioRolRepository.update(id, await this.getData(dto));
		return this.getById(id);
	}

	async getData(dto: UsuarioRolDto) {
		return {
			...dto,
			rolId: undefined,
			rol: await this.iRolService.getById(dto.rolId),
			usuarioId: undefined,
			usuario: await this.iUsuarioService.getById(dto.usuarioId)
		};
	}

	async deleteById(id: string): Promise<boolean> {
		await this.usuarioRolRepository.delete(id);
		return true;
	}
}
