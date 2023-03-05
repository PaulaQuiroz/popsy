import { IsNotEmpty, IsNumber, Length } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class ProductoPedidoDto {
	@ApiProperty()
	@IsNotEmpty()
	@Length(36, 36)
	productoId: string;

	@ApiProperty()
	@IsNotEmpty()
	@Length(36, 36)
	pedidoId: string;

	@ApiProperty()
	@IsNotEmpty()
	@Length(36, 36)
	ProductoFactorConversionId: string;

	@ApiProperty()
	@IsNumber({
		allowNaN: false,
		allowInfinity: false,
		maxDecimalPlaces: 0
	})
	cantidad: number;

}
