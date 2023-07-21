const express = require('express');
const { connect } = require('./src/utils/database');
const routerUser = require('./src/api/routes/user.routes');

const PORT = 5001;
const app = express();

connect();

app.use(express.json());

app.use('/users', routerUser);

app.listen(PORT, () => {
  console.log(`Listening http://localhost:${PORT}`);
});

//
