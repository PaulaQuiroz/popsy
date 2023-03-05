import { Module } from "@nestjs/common";
import { DatabaseModule } from "./database/database.module";
import { AuthModule } from "./auth/auth.module";
import { PopsyModule } from "./popsy/popsy.module";
import { ConfigModule } from "@nestjs/config";

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			cache: true
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
