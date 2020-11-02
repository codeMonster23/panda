module.exports = {

    //首页
    index: function(req, res, next){
        res.render('notes/index', { layout:'notesLayout', title: '首页' ,slogan:true});
    },
    notebook: function (req, res, next) {
        res.render('notes/notebook', { layout:'notesLayout',title: "笔记本-简介",slogan:true});
    },
 	notebookDetail: function (req, res, next) {
        res.render('notes/notebookDetail', { layout:'notesLayout',title: "笔记本-详细",slogan:true});
    },
    mynote: function (req, res, next) {
        res.render('notes/mynote', { layout:'notesLayout',title: "我的笔记",nav:true,slogan:true});
    },
    mynotebook: function (req, res, next) {
        res.render('notes/mynotebook', { layout:'notesLayout',title: "我的笔记本",nav:true,subtitle:true});
    },
    createNote: function (req, res, next) {
        res.render('notes/createNote', { title: "新建笔记"});
    }
};

