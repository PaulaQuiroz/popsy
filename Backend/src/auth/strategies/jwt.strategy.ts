import { ExtractJwt, Strategy } from "passport-jwt";
import {PassportStrategy} from "@nestjs/passport";
import { LocalAuthService } from "../services/local-auth.service";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { LocalAuthDto } from "../dto/local-auth.dto";
import { UsuarioService } from "../services/usuario.service";
import { UsuarioEntity } from "../entities/usuario.entity";
import * as moment from "moment";
import { JwtAuthService } from "../services/jwt-auth.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, "jwt") {
    protected readonly _usernameField: string = "correo";

    constructor(
        protected iLocalAuthService: LocalAuthService,
        private readonly iJwtAuthService: JwtAuthService
    ){
        super({
            jwtFromRequest: ExtractJwt.fromExtractors([(req: any) => {
                if(req.cookies){
                    console.log(this.iJwtAuthService.validateJwt(req.cookies.token))
                    return req.cookies.token;
                } else {
                    throw new UnauthorizedException();
                }
            }]),
            ignoreExpiration: false,
            secretOrKey: process.env.API_AUTH_SECRET_JWT
        });
    }

    async validate(oUserDecode): Promise<UsuarioEntity>{
        return oUserDecode;
    }
}
