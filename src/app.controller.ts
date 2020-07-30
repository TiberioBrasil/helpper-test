import {
  BadGatewayException,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { InjectConnection } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

@Controller()
export class AppController {
  constructor(
    @InjectConnection()
    private readonly connection: Connection
  ) {}

  @Get('health')
  @HttpCode(HttpStatus.NO_CONTENT)
  async health(): Promise<void> {
    try {
      await this.connection.query('SELECT 1');
    } catch (err) {
      throw new BadGatewayException('Failed to communicate with the database');
    }
  }
}
