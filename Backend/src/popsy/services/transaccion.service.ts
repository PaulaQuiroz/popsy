import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { TransaccionDto } from '../dto/transaccion.dto';
import { TransaccionEntity } from '../entities/transaccion.entity';

@Injectable()
export class TransaccionService {
    constructor(
		@Inject("TRANSACCION_REPOSITORY")
		private readonly iTransaccionRepository: Repository<TransaccionEntity>
	) {
	}

	async getAll(): Promise<TransaccionEntity[]> {
		return await this.iTransaccionRepository.find();
	}

	async getById(id: string): Promise<TransaccionEntity | null> {
		return await this.iTransaccionRepository.findOneBy({
			id
		});
	}

	async save(dto: TransaccionDto): Promise<TransaccionEntity> {
		return await this.iTransaccionRepository.save(dto);
	}

	async updateById(id: string, dto: TransaccionDto): Promise<TransaccionEntity> {
		await this.iTransaccionRepository.update(id, dto);

		return this.getById(id);
	}

	async deleteById(id: string): Promise<boolean> {
		await this.iTransaccionRepository.softDelete(id);
		return true;
	}
}
