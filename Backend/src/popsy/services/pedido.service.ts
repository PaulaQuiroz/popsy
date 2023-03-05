import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { PedidoEntity } from "../entities/pedido.entity";
import { PedidoDto } from "../dto/pedido.dto";
import { EstadoPedidoService } from "./estado-pedido.service";
import { EstadoPedidoEntity } from "../entities/estado-pedido.entity";
import { TipoPedidoEntity } from "../entities/tipo-pedido.entity";
import { TipoPedidoService } from "./tipo-pedido.service";
import { PuntoVentaService } from "./punto-venta.service";
import { PuntoVentaEntity } from "../entities/punto-venta.entity";
import { UsuarioService } from "../../auth/services/usuario.service";
import { UsuarioEntity } from "../../auth/entities/usuario.entity";
import { DeepPartial } from "typeorm/common/DeepPartial";



@Injectable()
export class PedidoService {
	constructor(
		@Inject("PEDIDO_REPOSITORY")
		private readonly iPedidoRepository: Repository<PedidoEntity>,
		private readonly iEstadoPedidoService: EstadoPedidoService,
		private readonly iTipoPedidoService: TipoPedidoService,
		private readonly iPuntoVentaService: PuntoVentaService,
		private readonly iUsuarioService: UsuarioService,
	

	) {
	}

	async getAll() {
		return await this.iPedidoRepository.find({});
	}

	async getById(id: string) {
		return await this.iPedidoRepository.findOneBy({
			id
		});
	}

	async save(dto: PedidoDto) {
		return await this.iPedidoRepository.save(await this.getDatosGuardar(dto));
	}

	async updateById(id: string, dto: PedidoDto) {

		return await this.iPedidoRepository.update(id, await this.getDatosGuardar(dto));
	}

	async getDatosGuardar(dto: PedidoDto): Promise<DeepPartial<PedidoEntity>> {
		const estadoPedido: EstadoPedidoEntity | null = await this.iEstadoPedidoService.getById(dto.estadoPedidoId);

		if (!estadoPedido) {
			throw {
				message: "No se ha encontrado un estado de pedido valido."
			};
		}

		const tipoPedido: TipoPedidoEntity | null = await this.iTipoPedidoService.getById(dto.tipoPedidoId);

		if (!tipoPedido) {
			throw {
				message: "No se ha encontrado un tipo de pedido valido."
			};
		}

		const puntoVenta: PuntoVentaEntity | null = await this.iPuntoVentaService.getById(dto.puntoVentaId);

		if (!puntoVenta) {
			throw {
				message: "No se ha encontrado un punto de venta valido para el pedido."
			};
		}

		const usuario: UsuarioEntity | null = await this.iUsuarioService.getById(dto.usuarioId);

		if (!usuario) {
			throw {
				message: "No se ha encontrado un usuario valido para el pedido."
			};
		}
	


		return {
			estadoPedido,
			tipoPedido,
			puntoVenta,
			usuario,
			
			
		};
	}

	async deleteById(id: string) {
		await this.iPedidoRepository.softDelete(id);
		return true;
	}
}
