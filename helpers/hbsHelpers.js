module.exports = {
    //输出样式表
    stylesheets: function(path){
        this.cssArray = this.cssArray || [];
        this.cssArray.push(path);
    },
    //输出页面加载的脚本
    javascripts: function(path){
        this.jsArray = this.jsArray || [];
        this.jsArray.push(path);
    }
};