const request = require('supertest');
const express = require('express');
const app = express();
const router = require('../src/routes/mensalidadeRoutes');
app.use(express.json());
app.use('/mensalidades', router);

describe('Mensalidades', () => {
  it('deve retornar 200 no GET /mensalidades', async () => {
    const res = await request(app).get('/mensalidades');
    expect(res.statusCode).toBe(200);
  });
});