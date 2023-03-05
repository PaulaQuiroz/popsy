import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, Length } from "class-validator";

export class PermisoDto {

	@IsNotEmpty()
	@Length(1, 255)
	@ApiProperty()
	codigo: string;

	@IsNotEmpty()
	@Length(3, 255)
	@ApiProperty()
	descripcion: string;
}
