const express = require('express');

const router = express.Router();

const { getUsers } = require('../controllers/user.controller');

router.get('/allusers', getUsers);

module.exports = router;
