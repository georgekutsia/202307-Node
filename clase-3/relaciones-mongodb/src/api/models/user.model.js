const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    username: { type: String, required: true },
    city: { type: String, required: false },
    age: { type: Number },
  },
  { collection: 'user' }
);
//string, number, array, mixed, date, ObjectId, buffer( datos  binarios), boolean (true, false)

const User = mongoose.model('user', userSchema);
module.exports = User;
