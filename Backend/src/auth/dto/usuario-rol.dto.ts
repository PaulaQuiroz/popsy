import { IsNotEmpty, Length } from "class-validator";

export class UsuarioRolDto {
	@IsNotEmpty()
	@Length(36, 36)
	rolId: string;

	@IsNotEmpty()
	@Length(36, 36)
	usuarioId: string;
}
