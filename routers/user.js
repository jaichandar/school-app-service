const express = require('express')
const router = express.Router();
const { login, Register } = require('../controllers/user');

router.post('/login', login);
router.post('/register', Register);

module.exports = router;