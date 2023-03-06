import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import * as session from "express-session";
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	app.use(cookieParser());

	app.enableCors({});

	app.use(session({
		secret: process.env.API_CONFIG_SESSION_SECRET,
		resave: false,
		saveUninitialized: false
	}));

	const config = new DocumentBuilder()
		.setTitle('Popsy App')
		.setDescription('')
		.setVersion('1.0')
		.build();

	const document = SwaggerModule.createDocument(app, config);

	SwaggerModule.setup('api/swagger', app, document);

	await app.listen(3000);
}

bootstrap()
	.then();
