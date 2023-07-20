const express = require('express');

const server = express();
server.use(express.json());

const list = [
  {
    name: 'leche',
    cantidad: 3,
    precio: "1'20",
  },
  {
    name: 'carne',
    cantidad: 1,
    precio: '12',
  },
  {
    name: 'fruta',
    cantidad: 5,
    precio: '8',
  },
  {
    name: 'refresco',
    cantidad: 4,
    precio: "7'2",
  },
];

/*
method:
GET --> READ   leer ¡nformacion de la BBDD y la devuelve al front
POST -->CREATE  envia información a la BBDD, para crear nuevos registros
DELETE--> DELETE Eliminar uno o mas registros de la BBDD
PUT- PATCH -> UPDATE envia datos a la BBDD para modificar registros que ya existan
*/

const routerList = express.Router();
const routerMini = express.Router();

routerList.get('/listado', (req, res) => {
  res.send('he sacado los datos de la bd');
});
routerList.get('/orders', (req, res) => {
  res.send('he sacado de la bd las facturas');
});

routerMini.get('/city', (req, res) => {
  res.send('estas son las ciudades de los mini');
});
routerMini.post('/newmini', (req, res) => {
  res.json({
    message: 'estoy añadiendo un nuevo minimarket',
    success: true,
  });
});

server.use('/supermarket', routerList);
server.use('/minimarket', routerMini);

const PORT = 5001;
server.listen(PORT, () => {
  console.log(`Listen http://localhost:${PORT}`);
});
