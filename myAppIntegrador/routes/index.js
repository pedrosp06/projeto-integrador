var express = require('express');
var router = express.Router();
const controllersHomePage = require('../controllers/controllersHomePage')

/* GET home page. */


router.get('/', controllersHomePage.home)
router.get('/cadastro', controllersHomePage.cadastro)


module.exports = router;
