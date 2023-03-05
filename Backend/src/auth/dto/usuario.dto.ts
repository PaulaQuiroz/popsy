import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, Length } from "class-validator";

export class UsuarioDto {
	@IsNotEmpty()
	@ApiProperty()
	@Length(3, 255)
	nombres: string;

	@IsNotEmpty()
	@Length(3, 255)
	@ApiProperty()
	apellidos: string;

	@IsNotEmpty()
	@Length(3, 255)
	@IsEmail()
	@ApiProperty()
	correo: string;

	@IsNotEmpty()
	@Length(8, 255)
	@ApiProperty()
	password: string;
}
