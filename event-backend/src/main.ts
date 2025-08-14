import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	if (process.env.APP_ENV !== 'production') {
		app.enableCors({
			allowedHeaders: '*',
			origin: '*',
			credentials: true,
		});
	} else {
		app.enableCors({
			origin: process.env.FE_URL,
			credentials: true,
		});
	}

	const config = new DocumentBuilder()
		.setTitle('API com Swagger')
		.setDescription('Documentação da API')
		.setVersion('1.0')
		.addTag('Auth')
		.addTag('Events')
		.addBearerAuth()
		.build();

	const document = SwaggerModule.createDocument(app, config);

	SwaggerModule.setup('api-docs', app, document);
	console.log("Server rodando na porta ", process.env.PORT)
	await app.listen(process.env.PORT ?? 3000);

}
bootstrap();
