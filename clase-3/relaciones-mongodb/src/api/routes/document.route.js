const express = require('express');
const {
  addDocument,
  getAllDocuments,
  getDocumentById,
} = require('../controllers/document.controller');

const router = express.Router();

router.post('/', addDocument);
router.get('/', getAllDocuments);
router.get('/:idDoc', getDocumentById);

module.exports = router;
