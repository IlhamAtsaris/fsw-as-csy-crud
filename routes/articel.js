const express = require('express');
// call controller
const articelController = require('../controllers/article');
//call function Router from express
const router = express.Router();

router.get('/', articelController.getArticles);

module.exports = router;