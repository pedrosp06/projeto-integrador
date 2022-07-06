var express = require('express');
var router = express.Router();
const controllersHomePage = require('../controllers/controllersPagina')

/* GET home page. */

router.get('/',controllersHomePage.home)
router.get('/cadastro',controllersHomePage.cadastro)

module.exports = router;
