var express = require('express');
var path = require('path');
var app = express();

const port = process.env.PORT || 3000;

app.set('port',port);
app.use(express.static(__dirname+'/public'));

app.get('/[^\.]+$',function(req,res){
    res.set('Content-Type', 'text/html')
        .sendFile(path.join(__dirname,'/public/index.html'))
});

app.listen(app.get('port'),function (){
    console.log("Running on localhost port :  "+ port)
});