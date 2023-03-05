import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { ProductoEntity } from "../entities/producto.entity";
import { ProductoDto } from "../dto/producto.dto";

@Injectable()
export class ProductoService {
	constructor(
		@Inject("PRODUCTO_REPOSITORY")
		private readonly iProductoRepository: Repository<ProductoEntity>
	) {
	}

	async getAll(): Promise<ProductoEntity[]> {
		return await this.iProductoRepository.find({});
	}

	async getById(id: string): Promise<ProductoEntity | null> {
		return await this.iProductoRepository.findOneBy({
			id
		});
	}

	async save(dto: ProductoDto): Promise<ProductoEntity> {
		return await this.iProductoRepository.save(dto);
	}

	async updateById(id: string, dto: ProductoDto): Promise<ProductoEntity> {
		await this.iProductoRepository.update(id, dto);
		return await this.getById(id);
	}

	async deleteById(id: string): Promise<boolean> {
		await this.iProductoRepository.softDelete(id);
		return true;
	}
}
