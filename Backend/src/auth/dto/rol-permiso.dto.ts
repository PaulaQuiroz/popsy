import { IsNotEmpty, Length } from "class-validator";

export class RolPermisoDto {
	@IsNotEmpty()
	@Length(36, 36)
	rolId: string;

	@IsNotEmpty()
	@Length(36, 36)
	permisoId: string;
}
