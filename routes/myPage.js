var express = require('express');
var router = express.Router();
var myPageController = require('../controllers/myPage');

/* GET home page. */

router.get('/', myPageController.homepage);
router.get('/personalInfo',myPageController.personalInfo );


module.exports = router;
