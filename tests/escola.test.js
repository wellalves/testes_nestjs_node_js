const request = require('supertest');
const express = require('express');
const app = express();
const router = require('../src/routes/escolaRoutes');
app.use(express.json());
app.use('/escolas', router);

describe('Escolas', () => {
  it('deve retornar 200 no GET /escolas', async () => {
    const res = await request(app).get('/escolas');
    expect(res.statusCode).toBe(200);
  });
});