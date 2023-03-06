import { Controller, Post, Req, Res, UseGuards } from '@nestjs/common';
import { UsuarioEntity } from '../entities/usuario.entity';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { LocalAuthGuard } from '../guards/local-auth.guard';
import { JwtAuthService } from '../services/jwt-auth.service';
import * as moment from "moment";
import { ApiTags } from '@nestjs/swagger';

const ms = require("ms");

@ApiTags("auth")
@Controller('auth')
export class AuthController {
    constructor(
        private readonly iJwtAuthService: JwtAuthService
    ){

    }

    @Post("login")
    @UseGuards(LocalAuthGuard)
    async login(@Req() req, @Res() res){
        const oAuth = await this.getAuthJwt(req.user);

        res.cookie("token", oAuth.token, {
            expires: oAuth.expireDate,
            sameSite: false
        });

        res.json({
            ...req.user,
            token: oAuth.token
        });
    }

    @Post("current-user")
    @UseGuards(JwtAuthGuard)
    async getCurrentUser(@Req() req){
        return req.user;
    }

    async getAuthJwt(oUser: UsuarioEntity){
        return {
            oUser,
            expireDate: (moment(new Date())
            .add(ms(process.env.API_CONFIG_AUTH_DURATION_JWT), "ms") as moment.Moment).toDate(),
            token: (await this.iJwtAuthService.encodeJwt(oUser)).access_token
        }
    }
}
