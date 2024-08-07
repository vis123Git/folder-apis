const express = require('express');
const { AuthenticateApi } = require('../middlewares/auth');
const { logout } = require('../controllers/user.controller');
const router = express.Router();
router.use(AuthenticateApi)

router.get("/logout", logout)


module.exports = router;
