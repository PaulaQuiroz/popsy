import {IsNotEmpty, IsNumber, Length} from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class ProductoPuntoVentaDto {
	@ApiProperty()
	@IsNumber()
	cantidadProductoMaxima: number;

	@ApiProperty()
	@IsNumber()
	stockActual: number;

	@ApiProperty()
	@IsNumber()
	stockTransito: number;

	@ApiProperty()
	@IsNotEmpty()
	@Length(1, 255)
	puntoDistribucion: string;

	@ApiProperty()
	@IsNotEmpty()
	@Length(36, 36)
	productoId: string;

	@ApiProperty()
	@IsNotEmpty()
	@Length(36, 36)
	puntoVentaId: string;
}
