import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	app.use(cookieParser());

	app.enableCors({});

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
