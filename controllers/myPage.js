module.exports = {

    homepage: function(req, res, next){
        res.render('myPage/homepage', {  layout:'notesLayout', title: '个人主页', subtitle:true });
    },
    personalInfo: function(req, res, next){
        res.render('myPage/personalInfo', { title: '个人资料'});
    }
};

