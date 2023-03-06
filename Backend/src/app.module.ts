import { Module } from "@nestjs/common";
import { DatabaseModule } from "./database/database.module";
import { AuthModule } from "./auth/auth.module";
import { PopsyModule } from "./popsy/popsy.module";
import { ConfigModule } from "@nestjs/config";
import { ServeStaticModule } from "@nestjs/serve-static";
import * as path from "path";

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			cache: true
		}),
		ServeStaticModule.forRoot({
			rootPath: path.join(__dirname, "../../frontend/dist/frontend")
		}),
		DatabaseModule, 
		AuthModule, 
		PopsyModule
	],
	controllers: [],
	providers: []
})
export class AppModule {
}
