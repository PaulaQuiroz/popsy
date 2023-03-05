import { Injectable } from '@nestjs/common';
import { LocalAuthDto } from '../dto/local-auth.dto';
import { UsuarioService } from './usuario.service';
import * as bcrypt from "bcryptjs"

@Injectable()
export class LocalAuthService {
    constructor(
        private readonly iUsuarioService: UsuarioService
    ) {

    }

    async validateUser(correo: string, password: string): Promise<LocalAuthDto | null> {
        const user = await this.iUsuarioService.getByCorreo(correo);

        if (user && bcrypt.compareSync(password, user.password)) {
            return {
                id: user.id,
                nombres: user.nombres,
                apellidos: user.apellidos,
                correo: user.correo
            } as LocalAuthDto;
        }

        return null;
    }
}
