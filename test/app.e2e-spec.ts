import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import supertest, { SuperTest } from 'supertest';
import { AppModule } from '../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let client: SuperTest<supertest.Test>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
    client = supertest(app.getHttpServer());
  });

  afterEach(async () => app.close());

  it('/health (GET)', async () => {
    const response = await client.get('/health');
    expect(response.status).toBe(204);
  });
});
