const express = require('express');
const { connect } = require('./src/utils/database');
const routerUser = require('./src/api/routes/user.routes');
const routerDocument = require('./src/api/routes/document.route');

const PORT = 5001;
const app = express();

connect();

app.use(express.json());
//hay documentos, hay usuarios, un usuario puede tener asociado muchos documentos
//el problema es un documento puede tener asociado uno o mas usuarios

app.use('/users', routerUser);
app.use('/document', routerDocument);

app.listen(PORT, () => {
  console.log(`Listening http://localhost:${PORT}`);
});

//

// representar una tienda online -> cliente, productos, datos de pago, cesta de la compra,
// pedido o factura(id, relación con produc, relación con cliente)
