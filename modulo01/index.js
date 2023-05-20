//buscando tudo que tem dentro do express
const express = require('express');

//iniciar o express
const server = express();

//query params = sao parametros nomeados enviados na rota apos o simbolo de interrogacao e servem para filtros, paginacao
//ex query params: ...?nome=Diego

//route params = sao parametros utilizados para identificar recursos
//ex route params: .../users/1

//request body = corpo da requisicao, utilizado para criar ou alterar recursos
//ex request body: { "name": "Diego", "idade": 23 }

const cursos = ['NodeJS', 'Javascript', 'React Native'];

//criar rotas
//req representa os dados que vem do cliente e res representa a resposta que vai ser enviada para o cliente
server.get('/curso/:index', (req, res) => {
  //   const nome = req.query.nome;
  //   const id = req.params.id;
  const { index } = req.params;
  //   return res.json({ curso: `Curso ${id}` });
  return res.json(cursos[index]);
  //   return res.json({ curso: `Aprendendo ${nome}` });
});

//rodar em uma porta
server.listen(3000);
