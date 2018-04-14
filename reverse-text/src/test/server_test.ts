import * as chai from 'chai';
import * as supertest from 'supertest';
import { getApp } from '../server';

const assert = chai.assert;

suite('Server', () => {
  test('api reverses text', async () => {
    const app = getApp();
    await supertest(app).post('/api').send('text=hello').expect(200, { result: 'olleh' });
  });
});
