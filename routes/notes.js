var express = require('express');
var router = express.Router();
var notesController = require('../controllers/notes');

/* GET home page. */
router.get('/',notesController.index );

router.get('/notes/notebook',notesController.notebook );

router.get('/notes/notebookDetail',notesController.notebookDetail );

router.get('/notes/mynote',notesController.mynote );

router.get('/notes/mynotebook',notesController.mynotebook );

router.get('/notes/createNote',notesController.createNote );
module.exports = router;
