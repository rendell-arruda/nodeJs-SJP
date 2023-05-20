//buscando tudo que tem dentro do express
const express = require('express');

//iniciar o express
const server = express();

//criar rotas
//req representa os dados que vem do cliente e res representa a resposta que vai ser enviada para o cliente
server.get('/cursos', (req, res) => {
  return res.json({ curso: 'Node JS' });
});

//rodar em uma porta
server.listen(3000);
