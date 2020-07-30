import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import path from 'path';
import { AppController } from './app.controller';
import { POSTGRES_CONNECTION_DATA, TYPEORM_LOGGING } from './shared/constants';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      ...POSTGRES_CONNECTION_DATA,
      logging: /true/i.test(TYPEORM_LOGGING),
      entities: [path.join(__dirname, '**', '*.entity.{js,ts}')],
    }),
    AuthModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
