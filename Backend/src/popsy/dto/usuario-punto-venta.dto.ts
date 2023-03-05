import { IsNotEmpty, Length } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class UsuarioPuntoVentaDto {
	@ApiProperty()
	@IsNotEmpty()
	@Length(36, 36)
	usuarioId: string;

	@ApiProperty()
	@IsNotEmpty()
	@Length(36, 36)
	puntoVentaId: string;
}

export class UsuarioPuntoVentaMasivoDto {
	@ApiProperty()
	@IsNotEmpty()
	@Length(36, 36)
	usuarioId: string;

	@ApiProperty()
	@IsNotEmpty()
	puntosVentaId: string[];
}