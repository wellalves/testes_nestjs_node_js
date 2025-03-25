const request = require('supertest');
const express = require('express');
const app = express();
const router = require('../src/routes/aulaRoutes');
app.use(express.json());
app.use('/aulas', router);

describe('Aulas', () => {
  it('deve retornar 200 no GET /aulas', async () => {
    const res = await request(app).get('/aulas');
    expect(res.statusCode).toBe(200);
  });
});