const express = require('express');
const { connect } = require('./src/utils/database');

const PORT = 5001;
const app = express();

connect();

app.listen(PORT, () => {
  console.log(`Listening http://localhost:${PORT}`);
});

//
