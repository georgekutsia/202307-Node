const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const clientSchema = new Schema(
  {
    name: { type: String, required: true },
    lastName: { type: String, required: true },
  },
  { collection: 'client' }
);
//string, number, array, mixed, date, ObjectId, buffer( datos  binarios), boolean (true, false)

const Client = mongoose.model('client', clientSchema);
module.exports = Client;
