import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  // TODO verify that the storage environment variables are set
  const app = await NestFactory.create(AppModule, { cors: true });
  app.use(helmet({ crossOriginResourcePolicy: false }));

  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('Book Management System ')
    .setDescription('api documentation')
    .setVersion('1.0')
    .addBearerAuth(
      {
        description: `Please enter token`,
        name: 'Authorization',
        bearerFormat: 'Bearer',
        scheme: 'Bearer',
        type: 'http',
        in: 'Header',
      },
      'access-token',
    )
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/documentation', app, document, {
    swaggerOptions: {
      docExpansion: 'none',
    },
  });

  await app.listen(8080);
}
bootstrap();
