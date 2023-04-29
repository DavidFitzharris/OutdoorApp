const express = require('express');
const router = express.Router();
const authController = require('./controllers/auth.controller');

//For Login
router.post('/userlogin', authController.login);

//For registration
router.post('/register', authController.register);

module.exports = router;