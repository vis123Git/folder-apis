const express = require('express');
const { AuthenticateApi } = require('../middlewares/auth');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use(AuthenticateApi)

module.exports = router;
