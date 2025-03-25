const request = require('supertest');
const express = require('express');
const app = express();
const router = require('../src/routes/professorRoutes');
app.use(express.json());
app.use('/professores', router);

describe('Professores', () => {
  it('deve retornar 200 no GET /professores', async () => {
    const res = await request(app).get('/professores');
    expect(res.statusCode).toBe(200);
  });
});