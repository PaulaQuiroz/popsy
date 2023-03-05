import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, Length } from "class-validator";

export class TransaccionDto {

    @ApiProperty()
	@IsNotEmpty()
	@Length(3, 255)
	nombre: string;

    @ApiProperty()
	@IsNotEmpty()
	@Length(36, 36)
	tipoTransaccionId: string;

    @ApiProperty()
	@IsNotEmpty()
	@Length(36, 36)
	pedidoId: string;

    @ApiProperty()
	@IsNotEmpty()
	@Length(3, 255)
	esError: string;
}
