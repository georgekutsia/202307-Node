const express = require('express');

const server = express();

const artists = [
  'luis fonsi',
  'guns and roses',
  'metallica',
  'rosalia',
  'julio iglesia',
];

server.use('/song', (req, res) => {
  const playList = [
    {
      artist: 'luis fonsi',
      song: 'despacito',
    },
    {
      artist: 'guns and roses',
      song: 'Welcome to the jungle',
    },
  ];
  res.send(playList);
});

// rutas dinamicas, url params
server.use('/artist/:text/:id', (req, res) => {
  console.log(req.params);
  const { text, id } = req.params;
  const foundArtis = artists.filter((element) => element.includes(text));
  console.log(foundArtis);
  res.send(foundArtis);
});

server.use('/artist', (req, res) => {
  res.send(artists);
});

//
server.use('/', (req, res) => {
  res.send('estoy en el home');
});

const PORT = 5001;
server.listen(PORT, () => {
  console.log(`Listen http://localhost:${PORT}`);
});

/*
1.- npm init -> crear el package.json
2.- Crear en fichero index.js
3.- Añadir los script al package.json  "start": "node index.js", "dev": "nodemon index.js",
4.- instalar dependencias que necesites (express, cors)

! configuras el servidor

0.- Ejecutamos el index ( npm run dev)
1.- especificamos el puerto
2.- generamos las rutas necesarias
3.- devolvemos una respuesta por  cada ruta

*/
