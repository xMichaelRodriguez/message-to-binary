import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ['http://localhost:3000', 'https://message-to-binary.netlify.app'],
  });

  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  const configService = app.get(ConfigService);
  const PORT = configService.get('PORT') || 4000;
  await app.listen(PORT, () => {
    console.log(`listen on PORT: ${PORT}`);
  });
}
bootstrap();
