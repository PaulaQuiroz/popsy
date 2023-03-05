import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { ProductoPedidoDto } from "../dto/producto-pedido.dto";
import { ProductoPedidoEntity } from "../entities/producto-pedido.entity";
import { ProductoService } from "./producto.service";
import { PedidoService } from "./pedido.service";
import { ProductoFactorConversionService } from "./producto-factor-conversion.service";

@Injectable()
export class ProductoPedidoService {
	constructor(
		@Inject("PRODUCTO_PEDIDO_REPOSITORY")
		private readonly iProductoPedidoRepository: Repository<ProductoPedidoEntity>,
		private readonly iProductoService: ProductoService,
		private readonly iPedidoService: PedidoService,
		private readonly iProductoFactorConversionService: ProductoFactorConversionService,
	) {
	}

	async getAll(): Promise<ProductoPedidoEntity[]> {
		return await this.iProductoPedidoRepository.find();
	}

	async getById(id: string): Promise<ProductoPedidoEntity | null> {
		return await this.iProductoPedidoRepository.findOneBy({
			id
		});
	}

	async save(dto: ProductoPedidoDto): Promise<ProductoPedidoEntity> {
		return await this.iProductoPedidoRepository.save(await this.getData(dto));
	}

	async updateById(id: string, dto: ProductoPedidoDto): Promise<ProductoPedidoEntity> {
		await this.iProductoPedidoRepository.update(id, await this.getData(dto));

		return this.getById(id);
	}

	async getData(dto: ProductoPedidoDto) {
		return {
			...dto,
			productoId: undefined,
			producto: await this.iProductoService.getById(dto.productoId),

			pedidoId: undefined,
			pedido: await this.iPedidoService.getById(dto.pedidoId),
			
			
			productoFactorConversionId: undefined,
			productoFactorConversion: await this.iProductoFactorConversionService.getById(dto.ProductoFactorConversionId),

			
		};
	}

	async deleteById(id: string): Promise<boolean> {
		await this.iProductoPedidoRepository.softDelete(id);
		return true;
	}

}
