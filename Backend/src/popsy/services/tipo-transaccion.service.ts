import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { TipoTransaccionDto } from '../dto/tipo-transaccion.dto';
import { TipoTransaccionEntity } from '../entities/tipo-transaccion.entity';

@Injectable()
export class TipoTransaccionService {
    constructor(
		@Inject("TIPO_TRANSACCION_REPOSITORY")
		private readonly iTipoTransaccionRepository: Repository<TipoTransaccionEntity>
	) {
	}

	async getAll(): Promise<TipoTransaccionEntity[]> {
		return await this.iTipoTransaccionRepository.find();
	}

	async getById(id: string): Promise<TipoTransaccionEntity | null> {
		return await this.iTipoTransaccionRepository.findOneBy({
			id
		});
	}

	async save(dto: TipoTransaccionDto): Promise<TipoTransaccionEntity> {
		return await this.iTipoTransaccionRepository.save(dto);
	}

	async updateById(id: string, dto: TipoTransaccionDto): Promise<TipoTransaccionEntity> {
		await this.iTipoTransaccionRepository.update(id, dto);

		return this.getById(id);
	}

	async deleteById(id: string): Promise<boolean> {
		await this.iTipoTransaccionRepository.softDelete(id);
		return true;
}
}
