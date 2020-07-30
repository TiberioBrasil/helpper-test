import { Test, TestingModule } from '@nestjs/testing';
import { getConnectionToken } from '@nestjs/typeorm';
import createMockInstance from 'jest-create-mock-instance';
import { Connection } from 'typeorm';
import { AppController } from './app.controller';

describe('AppController', () => {
  let connection: jest.Mocked<Connection>;
  let controller: AppController;
  let app: TestingModule;

  beforeEach(async () => {
    connection = createMockInstance(Connection);

    app = await Test.createTestingModule({
      providers: [{ provide: getConnectionToken(), useValue: connection }],
      controllers: [AppController],
    }).compile();

    controller = app.get<AppController>(AppController);
  });

  afterEach(async () => app.close());

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
