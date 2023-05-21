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

//explicaça sobre middlewares global
server.use((req, res, next) => {
  console.log(`URL CHAMADA: ${req.url}`);
  return next();
});

//explicaça sobre middlewares local
function checkCurso(req, res, next) {
  if (!req.body.name) {
    return res.status(400).json({ error: 'Nome do curso é obrigatorio' });
  }
  return next();
}

function checkIndexCurso(req, res, next) {
  const curso = cursos[req.params.index];

  if (!curso) {
    return res.status(400).json({ error: 'O curso não existe' });
  }

  req.curso = curso;
  return next();
}

server.get('/cursos', (req, res) => {
  return res.json(cursos);
});

//criar rotas
//req representa os dados que vem do cliente e res representa a resposta que vai ser enviada para o cliente
server.get('/cursos/:index', checkIndexCurso, (req, res) => {
  const { index } = req.params;
  return res.json(req.curso);
});

//criar um curso
server.post('/cursos', checkCurso, (req, res) => {
  const { name } = req.body;

  cursos.push(name);
  return res.json(cursos);
});

//atualizando um curso
server.put('/cursos/:index', checkCurso, checkIndexCurso, (req, res) => {
  const { index } = req.params;

  const { name } = req.body;

  cursos[index] = name;
  return res.json(cursos);
});

//excluindo um curso
server.delete('/cursos/:index', checkIndexCurso, (req, res) => {
  const { index } = req.params;

  cursos.splice(index, 1);
  return res.json({ messege: 'O curso foi deletado com sucesso' });
});

//rodar em uma porta
server.listen(3000);
