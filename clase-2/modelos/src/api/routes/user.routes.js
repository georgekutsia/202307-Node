const express = require('express');

const router = express.Router();

const {
  getUsers,
  newUser,
  updateUser,
  deleteUser,
} = require('../controllers/user.controller');

router.get('/allusers', getUsers);
router.post('/new', newUser);
router.put('/update/:id', updateUser);
router.delete('/delete/:id', deleteUser);

module.exports = router;
