// imports
const http = require('http');

const server = http.createServer(requestHandler);

function requestHandler(req, res) {
  // req -> la solicitud que le han hecho al resvidor
  // res -->  La respuesta que dara el servidor

  res.setHeader('Content-Type', 'application/json');
  // 200 hace referencia al estatus de la respuesta
  res.writeHead(200);
  //
  res.end('mi servidor de Node js');
}

server.listen(4000, () => {
  console.log(`Server listen http://localhost:4000`);
});
