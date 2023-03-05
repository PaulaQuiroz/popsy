import { IsNotEmpty, Length } from "class-validator";

export class RolDto {

	@IsNotEmpty()
	@Length(3, 255)
	nombre: string;

	@IsNotEmpty()
	@Length(3, 255)
	descripcion: string;
}
