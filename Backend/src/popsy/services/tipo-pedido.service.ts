import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { TipoPedidoEntity } from "../entities/tipo-pedido.entity";
import { TipoPedidoDto } from "../dto/tipo-pedido.dto";

@Injectable()
export class TipoPedidoService {
	constructor(
		@Inject("TIPO_PEDIDO_REPOSITORY")
		private readonly iTipoPedidoRepository: Repository<TipoPedidoEntity>
	) {
	}

	async getAll(): Promise<TipoPedidoEntity[]> {
		return await this.iTipoPedidoRepository.find();
	}

	async getById(id: string): Promise<TipoPedidoEntity | null> {
		return await this.iTipoPedidoRepository.findOneBy({
			id
		});
	}

	async save(dto: TipoPedidoDto): Promise<TipoPedidoEntity> {
		return await this.iTipoPedidoRepository.save(dto);
	}

	async updateById(id: string, dto: TipoPedidoDto): Promise<TipoPedidoEntity> {
		await this.iTipoPedidoRepository.update(id, dto);
		return await this.getById(id);
	}

	async deleteById(id: string) {
		await this.iTipoPedidoRepository.softDelete(id);
		return true;
	}
}
