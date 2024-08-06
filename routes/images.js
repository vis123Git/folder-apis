const express = require('express');
const { AuthenticateApi } = require('../middlewares/auth');
const router = express.Router();

router.use(AuthenticateApi)

module.exports = router;
