const express = require('express');
const router = express.Router();
const userFuncs = require('../controllers/userController');

router.post('/register', userFuncs.registerUser);

router.post('/login', userFuncs.loginUser);

router.post('/edit', userFuncs.editUser);

module.exports = router;
