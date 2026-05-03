const request = require('supertest');
const app = require('../server');

describe('Notes API', () => {
  it('GET /health should return OK', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('OK');
  });
});