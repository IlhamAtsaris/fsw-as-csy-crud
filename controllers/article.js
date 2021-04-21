exports.getArticles = (req,res,next) =>{
    res.render('article/index',{
        title : 'All Article',
        path : '/article'
    })
}