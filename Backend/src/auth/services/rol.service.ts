import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { RolDto } from "../dto/rol.dto";
import { RolEntity } from "../entities/rol.entity";

@Injectable()
export class RolService {
	constructor(
		@Inject("ROL_REPOSITORY")
		private readonly RolRepository: Repository<RolEntity>
	) {
	}

	async getAll(): Promise<RolEntity[]> {
		return await this.RolRepository.find();
	}

	async getById(id: string): Promise<RolEntity | null> {
		return await this.RolRepository.findOneBy({
			id
		});
	}

	async save(dto: RolDto): Promise<RolEntity> {
		return this.RolRepository.save(dto);
	}

	async updateById(id: string, dto: RolDto): Promise<RolEntity | null> {
		await this.RolRepository.update(id, dto);
		return this.getById(id);
	}

	async deleteById(id: string): Promise<boolean> {
		await this.RolRepository.delete(id);
		return true;
	}
}
