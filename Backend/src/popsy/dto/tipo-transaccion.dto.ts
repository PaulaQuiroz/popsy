import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, Length } from "class-validator";

export class TipoTransaccionDto {
    
    @ApiProperty()
	@IsNotEmpty()
	@Length(3, 255)
	codigo: string;

    @ApiProperty()
	@IsNotEmpty()
	@Length(3, 255)
	descripcion: string;

    

}
