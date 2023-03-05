import { Injectable } from "@nestjs/common";
import { Inject } from "@nestjs/common/decorators";
import { Repository } from "typeorm";
import { ProductoPuntoVentaDto } from "../dto/producto-punto-venta.dto";
import { ProductoPuntoVentaEntity } from "../entities/producto-punto-venta.entity";
import { ProductoService } from "./producto.service";
import { PuntoVentaService } from "./punto-venta.service";
import {ProductoEntity} from "../entities/producto.entity";
import {FactorConversionService} from "./factor-conversion.service";
import {FactorConversionEntity} from "../entities/factor-conversion.entity";
//import {IFactorConversionDetalle, IResponseFactorConversion} from "../dto/response-factor-conversion.dto";

@Injectable()
export class ProductoPuntoVentaService {
	constructor(
		@Inject("PRODUCTO_PUNTO_VENTA_REPOSITORY")
		private readonly iProductoPuntoVentaRepository: Repository<ProductoPuntoVentaEntity>,
		private readonly iProductoService: ProductoService,
		private readonly iPuntoVentaService: PuntoVentaService,
	//	private readonly iFactorConversionService: FactorConversionService
	) {
	}

	async getAll(): Promise<ProductoPuntoVentaEntity[]> {
		return await this.iProductoPuntoVentaRepository.find();
	}

	async getById(id: string): Promise<ProductoPuntoVentaEntity | null> {
		return await this.iProductoPuntoVentaRepository.findOneBy({
			id
		});
	}

	async getAllByCategoriaAndPuntoVenta(categoriaProducto: string, idPuntoVenta:string): Promise<ProductoPuntoVentaEntity[]> {
		return this.iProductoPuntoVentaRepository.find({
			where: {
				puntoVenta: {
					id: idPuntoVenta
				},
				producto: {
					categoriaProducto: categoriaProducto
				}
			}
		});
	}

	/*	const oResponse: IResponseFactorConversion[] = [];

		for (let i = 0; i < oProducts.length; i++){
			const oProductoPuntoVenta = oProducts[i];
			const factorConversion: FactorConversionEntity[] =
				(await this.iFactorConversionService.getByProductoId(oProductoPuntoVenta.producto.id))
					.sort((o1, o2) => {
						return o1.orden
					});

			oResponse.push({
				...oProductoPuntoVenta,
				stockActualDetalle: this.convertirCantidadProductoMenorAMayor(
					factorConversion[0],
					factorConversion[1],
					oProductoPuntoVenta
				)
			});
		}

		return oResponse;
	*/
	
/*
	convertirCantidadProductoMayorAMenor(origen: FactorConversionEntity,
								destino: FactorConversionEntity, oProduct: ProductoPuntoVentaEntity): IFactorConversionDetalle{
		if(oProduct.producto.minimaUnidad.toUpperCase() === destino.unidadBase.toUpperCase()){
			return {
				valor: oProduct.stockActual,
				unidad: oProduct.producto.minimaUnidad
			}
		}

		return {
			valor: (oProduct.stockActual * origen.valor) / destino.valor,
			unidad: destino.unidadBase
		};
	}

	convertirCantidadProductoMenorAMayor(origen: FactorConversionEntity,
						destino: FactorConversionEntity, oProduct: ProductoPuntoVentaEntity): IFactorConversionDetalle{
		if(oProduct.producto.minimaUnidad.toUpperCase() === destino.unidadBase.toUpperCase()){
			return {
				valor: oProduct.stockActual,
				unidad: oProduct.producto.minimaUnidad
			}
		}

		return {
			valor: (oProduct.stockActual * destino.valor) / origen.valor,
			unidad: destino.unidadBase
		}
		*/
		
	
	

	async getAllCategoriasByPuntoVenta(idPuntoVenta: string): Promise<any[]> {
		const oProducts: any[] = await this.iProductoPuntoVentaRepository.createQueryBuilder("productos_puntos_venta")
			.innerJoin(ProductoEntity, "producto", "producto.id = productos_puntos_venta.producto_id")
			.select("producto.categoria_producto")
			.addSelect("count(*) as cantidad")
			.groupBy("producto.categoria_producto")
			.where("productos_puntos_venta.punto_venta_id = :idPuntoVenta")
			.setParameter("idPuntoVenta", idPuntoVenta)
			.getRawMany();

		return oProducts.map((oItem: any) => {
			return {
				categoria: oItem.categoria_producto,
				cantidad: parseInt(oItem.cantidad)
			}
		});
	}

	async save(dto: ProductoPuntoVentaDto): Promise<ProductoPuntoVentaEntity> {
		return await this.iProductoPuntoVentaRepository.save(await this.getData(dto));
	}

	async updateById(id: string, dto: ProductoPuntoVentaDto): Promise<ProductoPuntoVentaEntity> {
		await this.iProductoPuntoVentaRepository.update(id, await this.getData(dto));

		return this.getById(id);
	}

	async getData(dto: ProductoPuntoVentaDto) {
		return {
			...dto,
			productoId: undefined,
			producto: await this.iProductoService.getById(dto.productoId),

			puntoVentaId: undefined,
			puntoVenta: await this.iPuntoVentaService.getById(dto.puntoVentaId)
		};
	}

	async deleteById(id: string): Promise<boolean> {
		await this.iProductoPuntoVentaRepository.softDelete(id);
		return true;
	}
}
