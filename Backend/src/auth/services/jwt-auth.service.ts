import { Injectable } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioEntity } from '../entities/usuario.entity';
import {JwtService} from "@nestjs/jwt"

@Injectable()
export class JwtAuthService {
    constructor(
        private readonly iUsuarioService: UsuarioService,
        private readonly iJwtService: JwtService
    ) {

    }

    async encodeJwt(oUser: UsuarioEntity){
        const tmpUsuario = {};

        for(const key in oUser){
            if(!["iat", "exp", "fechaCreacion", "fechaActualizacion", "fechaEliminacion"]
            .includes(key)){
                tmpUsuario[key] = oUser[key];
            }
        }

        return {
            access_token: this.iJwtService.sign(tmpUsuario)
        }
    }

    async decodeJwt(token: string){
        return this.iJwtService.decode(token);
    }

    async validateJwt(token: string){
        return this.iJwtService.decode(token)
    }
}
