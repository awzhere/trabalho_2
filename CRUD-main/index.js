const sequelize = require('./database');
const express = require('express');
const routes = require('./routes/routes');



const app = express();
const PORT = 3000;

app.use(routes);

const REPORT_MESSAGES = {

  "SYNCHRONIZED_DB" : 'Banco de dados sincronizado, iniciando o servidor',
  "SERVER_RUNNING" : `Servidor rodando na porta http://localhost:${PORT}`,
  "DB_SYNC_ERROR" : 'Erro ao sincronizar o banco de dados. Servidor nao iniciado',

}
//  Promise de setup do servidor
//  Retorna erro caso há falhas na sincronização do DB e não inicia o servidor

sequelize.sync().then(() => {
  console.log(REPORT_MESSAGES.SYNCHRONIZED_DB);

  app.listen(PORT, () => {
    console.log(REPORT_MESSAGES.SERVER_RUNNING);
  });
}).catch(error => {
  console.error(REPORT_MESSAGES.DB_SYNC_ERROR, error);
});

