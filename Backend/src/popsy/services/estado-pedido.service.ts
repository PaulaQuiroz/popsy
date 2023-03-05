import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { EstadoPedidoEntity } from "../entities/estado-pedido.entity";
import { EstadoPedidoDto } from "../dto/estado-pedido.dto";

@Injectable()
export class EstadoPedidoService {
	constructor(
		@Inject("ESTADO_PEDIDO_REPOSITORY")
		private readonly iEstadoPedidoRepository: Repository<EstadoPedidoEntity>
	) {
	}

	async getAll(): Promise<EstadoPedidoEntity[]> {
		return await this.iEstadoPedidoRepository.find({});
	}

	async getById(id: string): Promise<EstadoPedidoEntity | null> {
		return await this.iEstadoPedidoRepository.findOneBy({
			id
		});
	}

	async save(dto: EstadoPedidoDto): Promise<EstadoPedidoEntity> {
		return await this.iEstadoPedidoRepository.save(dto);
	}

	async updateById(id: string, dto: EstadoPedidoDto): Promise<EstadoPedidoEntity> {
		await this.iEstadoPedidoRepository.update(id, dto);
		return await this.getById(id);
	}

	async deleteById(id: string): Promise<boolean> {
		await this.iEstadoPedidoRepository.softDelete(id);
		return true;
	}
}
