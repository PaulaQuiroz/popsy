import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, Length } from "class-validator";

export class RolDto {

	@IsNotEmpty()
	@Length(3, 255)
	@ApiProperty()
	nombre: string;

	@IsNotEmpty()
	@Length(3, 255)
	@ApiProperty()
	descripcion: string;
}
