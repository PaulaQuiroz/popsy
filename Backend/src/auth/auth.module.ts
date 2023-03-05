import { Module } from "@nestjs/common";
import { DatabaseModule } from "../database/database.module";
import { AuthProvider } from "./providers/auth.provider";
import { UsuarioService } from "./services/usuario.service";
import { UsuarioController } from "./controllers/usuario.controller";
import { RolService } from "./services/rol.service";
import { UsuarioRolService } from "./services/usuario-rol.service";
import { PermisoService } from "./services/permiso.service";
import { RolPermisoService } from "./services/rol-permiso.service";
import { AuthController } from './controllers/auth.controller';
import { LocalAuthService } from './services/local-auth.service';
import { LocalStrategy } from "./strategies/local.strategy";
import { PassportModule } from "@nestjs/passport";
import { JwtAuthService } from "./services/jwt-auth.service";
import { JwtModule } from "@nestjs/jwt/dist";
import { JwtStrategy } from "./strategies/jwt.strategy";
import { RolController } from './controllers/rol.controller';
import { RolUsuarioController } from './controllers/rol-usuario.controller';

const ms = require("ms")

@Module({
	imports: [
		DatabaseModule,
		PassportModule,
		JwtModule.registerAsync({
			useFactory: () => {
				console.log({
					secret: process.env.API_AUTH_SECRET_JWT,
					signOptions: {
						expiresIn: ms(process.env.API_CONFIG_AUTH_DURATION_JWT)
					}
				})
				return {
					secret: process.env.API_AUTH_SECRET_JWT,
					signOptions: {
						expiresIn: ms(process.env.API_CONFIG_AUTH_DURATION_JWT)
					}
				}
			}
		})
	],
	providers: [
		...AuthProvider, 
		UsuarioService,
		RolService, 
		UsuarioRolService, 
		PermisoService, 
		RolPermisoService, 
		LocalAuthService,
		LocalStrategy,
		JwtStrategy,
		JwtAuthService
	],
	controllers: [UsuarioController, AuthController, RolController, RolUsuarioController],
	exports: [
		UsuarioService, 
		LocalAuthService, 
		LocalStrategy,
		JwtStrategy,
		JwtAuthService
	]
})
export class AuthModule {
}
