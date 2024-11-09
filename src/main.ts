import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  NestFastifyApplication,
  FastifyAdapter,
} from '@nestjs/platform-fastify';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  app.enableCors({ origin: ['http://localhost:4200'] });
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe());

  const configService = app.get(ConfigService);
  const port = +configService.get('PORT') || 3000;

  await app.listen(port, '0.0.0.0', (_err, address) => {
    console.log(`Listening to ${address}`);
  });
}
bootstrap();
