const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const documentSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    users: [{ type: Schema.ObjectId, ref: 'user' }],
    client: { type: Schema.ObjectId, ref: 'client' },
  },
  { collection: 'document' }
);
//string, number, array, mixed, date, ObjectId, buffer( datos  binarios), boolean (true, false)

const Document = mongoose.model('document', documentSchema);
module.exports = Document;
