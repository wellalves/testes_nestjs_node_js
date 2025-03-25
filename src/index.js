const express = require('express');
const app = express();
const db = require('./config/database');
const escolaRoutes = require('./routes/escolaRoutes');
const alunoRoutes = require('./routes/alunoRoutes');
const professorRoutes = require('./routes/professorRoutes');

const { swaggerUi, swaggerSpec } = require('./config/swagger');

const aulaRoutes = require('./routes/aulaRoutes');
const mensalidadeRoutes = require('./routes/mensalidadeRoutes');

//const professorRoutes = require('./routes/professorRoutes');

//const { swaggerUi, swaggerSpec } = require('./config/swagger');

//const aulaRoutes = require('./routes/aulaRoutes');
//const mensalidadeRoutes = require('./routes/mensalidadeRoutes');

app.use(express.json());
app.use('/escolas', escolaRoutes);
app.use('/alunos', alunoRoutes);
app.use('/professores', professorRoutes);
app.use('/aulas', aulaRoutes);
app.use('/mensalidades', mensalidadeRoutes);


app.use('/alunos', alunoRoutes);
app.use('/professores', professorRoutes);
app.use('/aulas', aulaRoutes);
app.use('/mensalidades', mensalidadeRoutes);


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const PORT = process.env.PORT || 3000;

db.sync().then(() => {
  console.log('Banco sincronizado');
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
});