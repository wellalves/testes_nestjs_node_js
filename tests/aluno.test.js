const request = require('supertest');
const express = require('express');
const app = express();
const router = require('../src/routes/alunoRoutes');
app.use(express.json());
app.use('/alunos', router);

describe('Alunos', () => {
  it('deve retornar 200 no GET /alunos', async () => {
    const res = await request(app).get('/alunos');
    expect(res.statusCode).toBe(200);
  });
});