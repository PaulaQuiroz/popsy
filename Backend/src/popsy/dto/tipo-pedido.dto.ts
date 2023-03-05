import { IsNotEmpty, Length } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class TipoPedidoDto {
	@ApiProperty()
	@IsNotEmpty()
	@Length(3, 255)
	nombre: string;
}
