import { IsNotEmpty, Length } from "class-validator";

export class PermisoDto {

	@IsNotEmpty()
	@Length(1, 255)
	codigo: string;

	@IsNotEmpty()
	@Length(3, 255)
	descripcion: string;
}
