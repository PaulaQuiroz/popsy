import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, Length } from "class-validator";

export class ErrorTransaccionDto {
    
    @ApiProperty()
	@IsNotEmpty()
	@Length(1, 255)
	datosEnviados: string;

	@ApiProperty()
	@IsNotEmpty()
	@Length(1, 255)
	datosRecibidos: string;

	@ApiProperty()
	@IsNotEmpty()
	@Length(36, 36)
	transaccionId: string;

}
