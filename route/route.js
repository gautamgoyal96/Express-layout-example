home = require("../application/controller/home.js");

module.exports = function(app) {
	
	app.get('/', home.home);
	app.get('/about', home.about);
	app.get('/classes', home.classes);
	app.get('/blog', home.blog);
	app.get('/contact', home.contact);
}