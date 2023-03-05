import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, Length } from "class-validator";

export class UsuarioRolDto {
	@ApiProperty()
	@IsNotEmpty()
	@Length(36, 36)
	rolId: string;

	@ApiProperty()
	@IsNotEmpty()
	@Length(36, 36)
	usuarioId: string;
}
