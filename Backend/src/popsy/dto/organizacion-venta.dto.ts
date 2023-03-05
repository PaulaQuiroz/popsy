import { IsNotEmpty, Length } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class OrganizacionVentaDto {
	@ApiProperty()
	@IsNotEmpty()
	@Length(3, 255)
	nombre: string;
	
	@ApiProperty()
	@IsNotEmpty()
	@Length(1, 255)
	codigo: string;
}
