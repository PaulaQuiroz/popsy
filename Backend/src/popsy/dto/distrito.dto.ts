import { IsNotEmpty, Length } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class DistritoDto {
	@ApiProperty()
	@IsNotEmpty()
	@Length(36, 36)
	organizacionVentaId: string;

	@ApiProperty()
	@IsNotEmpty()
	@Length(1, 255)
	nombre: string;

	@ApiProperty()
	@IsNotEmpty()
	@Length(1, 255)
	codigo: string;


}
