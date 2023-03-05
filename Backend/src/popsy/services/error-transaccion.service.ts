import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ErrorTransaccionDto } from '../dto/error-transaccion.dto';
import { ErrorTransaccionEntity } from '../entities/error-transaccion.entity';

@Injectable()
export class ErrorTransaccionService {
    constructor(
		@Inject("ERROR_TRANSACCION_REPOSITORY")
		private readonly iErrorTransaccionRepository: Repository<ErrorTransaccionEntity>
	) {
	}

	async getAll(): Promise<ErrorTransaccionEntity[]> {
		return await this.iErrorTransaccionRepository.find();
	}

	async getById(id: string): Promise<ErrorTransaccionEntity | null> {
		return await this.iErrorTransaccionRepository.findOneBy({
			id
		});
	}

	async save(dto: ErrorTransaccionDto): Promise<ErrorTransaccionEntity> {
		return await this.iErrorTransaccionRepository.save(dto);
	}

	async updateById(id: string, dto: ErrorTransaccionDto): Promise<ErrorTransaccionEntity> {
		await this.iErrorTransaccionRepository.update(id, dto);

		return this.getById(id);
	}

	async deleteById(id: string): Promise<boolean> {
		await this.iErrorTransaccionRepository.softDelete(id);
		return true;
}

}