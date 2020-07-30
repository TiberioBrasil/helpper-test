import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  await app.listen(parseInt(process.env.PORT ?? '3333', 10));
}

bootstrap().catch(err => {
  console.error(err);
  process.exit(10);
});
