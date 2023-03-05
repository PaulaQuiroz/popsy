import {IsNotEmpty, IsNumber, Length} from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class ProductoDto {
	@ApiProperty()
	@IsNotEmpty()
	@Length(1, 255)
	codigo: string;

	@ApiProperty()
	@IsNotEmpty()
	@Length(3, 255)
	nombre: string;

	@ApiProperty()
	@IsNotEmpty()
	@Length(3, 255)
	presentacion: string;

	@ApiProperty()
	@IsNotEmpty()
	@Length(1, 255)
	minimaUnidad: string;

	@ApiProperty()
	@Length(1, 255)
	cantidadMinima: string;

	@ApiProperty()
	@IsNumber({
		allowNaN: false,
		allowInfinity: false,
		maxDecimalPlaces: 0
	})
	productopedidoi: number;

	@ApiProperty()
	@IsNumber({
		allowNaN: false,
		allowInfinity: false,
		maxDecimalPlaces: 0
	})
	productopedidop: number;

	@ApiProperty()
	@IsNotEmpty()
	@Length(3, 255)
	categoriaProducto: string;
}
