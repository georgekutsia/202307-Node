const Document = require('../models/document.model');

const addDocument = async (req, res) => {
  try {
    const newDocument = new Document(req.body);
    const createdDocument = await newDocument.save();
    return res.status(200).json(createdDocument);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getAllDocuments = async (req, res) => {
  try {
    const allDocument = await Document.find().populate('users');
    return res.status(200).json(allDocument);
  } catch (error) {}
};

const getDocumentById = async (req, res) => {
  try {
    const { idDoc } = req.params;
    const doc = await Document.findById(idDoc).populate('users');
    //const doc = await Document.find({ _id: idDoc }).populate('users');
    if (!doc) {
      return res.status(400).json({ message: 'Documento no encontrado' });
    }
    return res.status(200).json(doc);
  } catch (error) {}
};
module.exports = { addDocument, getAllDocuments, getDocumentById };
