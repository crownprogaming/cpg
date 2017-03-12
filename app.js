/**
 * Project: Crown Pro Gaming Website 
 * Summary: The CPG website will provide details about what CPG is, the events they run,
 * the people who make CPG, and the applications that CPG makes. The site is mainly a static page.
 */

/**
 * app.js is the main entry point for the appication.
 */

//Require in our modules.
var config = require('./config');
var express = require('express');
var expressLayouts = require('express-ejs-layouts');
var app = express();
var path = require('path');
var port = config.sitePort || 4000;


//Begin middlewares
app.use(express.static(path.join(__dirname, '/public'))); //the public directory
app.use('/bower_components', express.static(path.join(__dirname, '/bower_components')));

app.set('views', './src/views');
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set('layout extractScripts', true);
app.set('layout extractStyles', true);

app.get('/', function (req, res) {
    res.render('index');
});

app.listen(port, function(){
    console.log("Website is running on http://" + config.siteRoot + ":" + port);
});