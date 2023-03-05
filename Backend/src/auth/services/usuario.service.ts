import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { UsuarioEntity } from "../entities/usuario.entity";
import { UsuarioDto } from "../dto/usuario.dto";
import * as bcrypt from "bcryptjs";

@Injectable()
export class UsuarioService {
	constructor(
		@Inject("USUARIO_REPOSITORY")
		private readonly usuarioRepository: Repository<UsuarioEntity>
	) {
	}

	async getAll(): Promise<UsuarioEntity[]> {
		return await this.usuarioRepository.createQueryBuilder("usuarios")
			.select("usuarios.usuario_id")
			.addSelect("usuarios.nombres")
			.addSelect("usuarios.apellidos")
			.addSelect("usuarios.correo")
			.getMany();
	}

	async getById(id: string): Promise<UsuarioEntity | null> {
		return {
			...(await this.usuarioRepository.findOneBy({
				id
			})),
			password: undefined
		};
	}

	async getByCorreo(correo: string): Promise<UsuarioEntity | null> {
		return await this.usuarioRepository.findOneBy({
			correo
		});
	}

	async save(dto: UsuarioDto): Promise<UsuarioEntity> {
		dto.password = await this.hashPassword(dto.password);
		return {
			...(await this.usuarioRepository.save(dto)),
		password: undefined
		};
	}

	async updateById(id: string, dto: UsuarioDto): Promise<UsuarioEntity | null> {
		dto.password = await this.hashPassword(dto.password);
		await this.usuarioRepository.update(id, dto);
		return this.getById(id);
	}

	async hashPassword(password){
		return await bcrypt.hash(password, 10);
	}

	async deleteById(id: string): Promise<boolean> {
		await this.usuarioRepository.delete(id);
		return true;
	}
}
