// imports
const http = require('http');

const requestHandler = (req, res) => {
  // req -> la solicitud que le han hecho al servidor
  // res -->  La respuesta que dara el servidor
  console.log(req.url);
  res.setHeader('Content-Type', 'application/json');
  // 200 hace referencia al estatus de la respuesta
  res.writeHead(200);
  //
  if (req.url === '/') {
    res.end('mi servidor de Node js');
  } else if (req.url === '/characters') {
    res.end('todos los personajes de mi api');
  } else if (req.url === '/powers') {
    res.end('estos son los poderes de mis personajes');
  }
};

const server = http.createServer(requestHandler);

server.listen(4000, () => {
  console.log(`Server listen http://localhost:4000`);
});
