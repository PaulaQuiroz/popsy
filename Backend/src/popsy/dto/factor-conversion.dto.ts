import { IsNotEmpty, IsNumber, Length } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class FactorConversionDto {
	@ApiProperty()
	@IsNotEmpty()
	@Length(1, 255)
	unidadBase: string;

	@ApiProperty()
	@IsNumber({
		allowNaN: false,
		allowInfinity: false,
		maxDecimalPlaces: 0
	})
	valor: number;

	@ApiProperty()
	@IsNotEmpty()
	@Length(36, 36)
	productoId: string;

	@ApiProperty()
	@IsNotEmpty()
	@Length(1, 255)
	CodigoFcSap: string;

	@ApiProperty()
	@IsNotEmpty()
	@Length(1, 255)
	UnidadMedidaAlter: string;
}
