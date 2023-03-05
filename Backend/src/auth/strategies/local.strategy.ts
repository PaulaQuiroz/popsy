import { Strategy } from "passport-local";
import {PassportStrategy} from "@nestjs/passport";
import { LocalAuthService } from "../services/local-auth.service";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { LocalAuthDto } from "../dto/local-auth.dto";
import { UsuarioService } from "../services/usuario.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, "local") {
    protected readonly _usernameField: string = "correo";

    constructor(
        protected iLocalAuthService: LocalAuthService,
        private readonly iUsuarioService: UsuarioService
    ){
        super();
    }

    async validate(correo: string, password: string): Promise<LocalAuthDto>{
        const user = await this.iLocalAuthService.validateUser(correo, password);

        if(!user){
            throw new UnauthorizedException();
        }

        return user
    }
}
