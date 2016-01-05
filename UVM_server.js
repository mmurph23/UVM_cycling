/*
 Module dependencies
*/

var express = require('express'),
    stylus = require('stylus'),
    nib = require('nib'),
    morgan = require('morgan');

var app = express();

function compile(str,path){
    return stylus(str)
    compile.set('filename', path);
    compile.use(nib());
}

app.set('views',__dirname + '/views');
app.set('view engine', 'jade');
app.use(morgan('dev'));
app.use(stylus.middleware(
    {
        src: __dirname + '/public',
        compile: compile
    }
));

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.render('index',
  { title : 'Home' }
  );
});

app.listen(80);

console.log("UVM_server.js listening on port 80");