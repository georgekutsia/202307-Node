const mongoose = require('mongoose'); //  requerimos mongoose
const DB_URL =
  'mongodb+srv://dayana:BAVBNXF1qdtec8j9@cluster0.fci00lm.mongodb.net/clase2?retryWrites=true&w=majority';
//mongodb+srv://usuario:MI CONTRASEÑA@cluster0.fci00lm.mongodb.net/NOMBRE BD ?retryWrites=true&w=majority
const connect = async () => {
  try {
    const db = await mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const { name, host } = db.connection;
    console.log(`Connect to: ${name} host: ${host}`);
  } catch (error) {
    console.log(`He tenido el siguiente problema al conectarme: ${error}`);
  }
};

module.exports = { connect };
