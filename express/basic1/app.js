var express = require('express');
var ejs = require('ejs');
var bodyParser = require('body-parser');
var app = express();

app.engine('ejs',ejs.renderFile);
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/',function(req,res){
    console.log('---GET Request---');
    console.log('nameは' + req.query.name);
    console.log('ageは' + req.query.age);
    res.render('temp.ejs',{});
});

app.post('/',function(req,res){
    console.log('---POST Request---');
    console.log('nameは' + req.body.name);
    console.log('ageは' + req.body.age);
    res.render('temp.ejs',{});
});

var server = app.listen(1234, function(){
    console.log('サーバーを起動しました');
});