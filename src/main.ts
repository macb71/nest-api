import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const corsOptions = {
    origin: ['https://angular17-app.vercel.app/', 'http://localhost:4200'],
  };
  app.enableCors(corsOptions);
  await app.listen(3000);
}
bootstrap();
