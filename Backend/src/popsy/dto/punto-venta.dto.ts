import { IsNotEmpty, Length } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class PuntoVentaDto {
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
	direccion: string;

	@ApiProperty()
	@IsNotEmpty()
	@Length(36, 36)
	distritoId: string;
}
