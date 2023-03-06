import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { UsuarioPuntoVentaDto } from "../dto/usuario-punto-venta.dto";
import { UsuarioPuntoVentaEntity } from "../entities/usuario-punto-venta.entity";
import { PuntoVentaService } from "./punto-venta.service";
import { UsuarioService } from "../../auth/services/usuario.service";

@Injectable()
export class UsuarioPuntoVentaService {
	constructor(
		@Inject("USUARIO_PUNTO_VENTA_REPOSITORY")
		private readonly iUsuarioPuntoVentaRepository: Repository<UsuarioPuntoVentaEntity>,
		private readonly iPuntoVentaService: PuntoVentaService,
		private readonly iUsuarioService: UsuarioService
	) {
	}

	async getAll(): Promise<UsuarioPuntoVentaEntity[]> {
		return await this.iUsuarioPuntoVentaRepository.find();
	}

	async getById(id: string): Promise<UsuarioPuntoVentaEntity | null> {
		return await this.iUsuarioPuntoVentaRepository.findOneBy({
			id
		});
	}

	async getByUsuario(idUsuario: string): Promise<UsuarioPuntoVentaEntity[]> {
		return await this.iUsuarioPuntoVentaRepository.find({
			where: {
				usuario: {
					id: idUsuario	
				}
			}
		});
	}

	async save(dto: UsuarioPuntoVentaDto): Promise<UsuarioPuntoVentaEntity> {
		return await this.iUsuarioPuntoVentaRepository.save(await this.getData(dto));
	}

	async updateById(id: string, dto: UsuarioPuntoVentaDto): Promise<UsuarioPuntoVentaEntity> {
		await this.iUsuarioPuntoVentaRepository.update(id, await this.getData(dto));

		return this.getById(id);
	}

	async getData(dto: UsuarioPuntoVentaDto) {
		return {
			...dto,
			usuarioId: undefined,
			usuario: await this.iUsuarioService.getById(dto.usuarioId),

			puntoVentaId: undefined,
			puntoVenta: await this.iPuntoVentaService.getById(dto.puntoVentaId)
		};
	}

	async deleteById(id: string): Promise<boolean> {
		await this.iUsuarioPuntoVentaRepository.softDelete(id);
		return true;
	}


}
