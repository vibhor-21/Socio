module.exports.home = function(req,res){
    // res.cookies, res.cookie('user_id;,25);
    return res.render('home',{
        title: "Home"
    });
}