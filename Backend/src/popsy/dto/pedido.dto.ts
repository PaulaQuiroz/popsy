import { IsNotEmpty, Length } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class PedidoDto {
	productoFactorConversionId(productoFactorConversionId: any): import("../services/producto-factor-conversion.service").ProductoFactorConversionService | PromiseLike<import("../services/producto-factor-conversion.service").ProductoFactorConversionService> {
		throw new Error("Method not implemented.");
	}
	@ApiProperty()
	@IsNotEmpty()
	@Length(36, 36)
	estadoPedidoId: string;

	@ApiProperty()
	@IsNotEmpty()
	@Length(36, 36)
	tipoPedidoId: string;

	@ApiProperty()
	@IsNotEmpty()
	@Length(36, 36)
	puntoVentaId: string;

	@ApiProperty()
	@IsNotEmpty()
	@Length(36, 36)
	usuarioId: string;


	@ApiProperty()
	@IsNotEmpty()
	@Length(3, 255)
	mensajeReciboSap: string;


}
