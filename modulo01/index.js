//buscando tudo que tem dentro do express
const express = require('express');

//iniciar o express
const server = express();
server.use(express.json());
//query params = sao parametros nomeados enviados na rota apos o simbolo de interrogacao e servem para filtros, paginacao
//ex query params: ...?nome=Diego

//route params = sao parametros utilizados para identificar recursos
//ex route params: .../users/1

//request body = corpo da requisicao, utilizado para criar ou alterar recursos
//ex request body: { "name": "Diego", "idade": 23 }

//criar um crud  = create, read, update, delete

const cursos = ['NodeJS', 'Javascript', 'React Native'];

server.get('/cursos', (req, res) => {
  return res.json(cursos);
});

//criar rotas
//req representa os dados que vem do cliente e res representa a resposta que vai ser enviada para o cliente
server.get('/cursos/:index', (req, res) => {
  const { index } = req.params;
  return res.json(cursos[index]);
});

//criar um curso
server.post('/cursos', (req, res) => {
  const { name } = req.body;

  cursos.push(name);
  return res.json(cursos);
});

//atualizando um curso
server.put('/cursos/:index', (req, res) => {
  const { index } = req.params;

  const { name } = req.body;

  cursos[index] = name;
  return res.json(cursos);
});

//excluindo um curso
server.delete('/cursos/:index', (req, res) => {
  const { index } = req.params;

  cursos.splice(index, 1);
  return res.json({ messege: 'O curso foi deletado com sucesso' });
});

//rodar em uma porta
server.listen(3000);
