module.exports.home = function (req,res){
	res.render('home',{'title' : 'Home'});
}

module.exports.about = function (req,res){
	res.render('about',{'title' : 'About'});
}

module.exports.classes = function (req,res){
	res.render('classes',{'title' : 'Classes'});
}

module.exports.blog = function (req,res){
	res.render('blog',{'title' : 'Blog'});
}

module.exports.contact = function (req,res){
	res.render('contact',{'title' : 'Contact'});
}
