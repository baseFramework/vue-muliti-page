var express = require('express');
var history = require('connect-history-api-fallback');
var app = express();
var path = require('path');
var meta = require('./package.json');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
process.on('uncaughtException', function (err) {
	(app.get('logger') || console).error('Uncaught exception:\n', err.stack);
});

app.set('name', meta.name);
app.set('version', meta.version);
app.set('port', process.env.PORT || 7777);
//app.use(history())
console.log(path.join(__dirname, 'dist/views', 'pages'));

app.set('views', path.join(__dirname, 'dist/views', 'pages'));
//app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

console.log(path.join(__dirname, 'dist'));
app.use(express.static(path.join(__dirname, 'dist')));
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname, 'dist/views', 'pages/index.html'))
})
app.get('/home',function(req,res){
    res.sendFile(path.join(__dirname, 'dist/views', 'pages/index.html'))
})
// app.set('logger', console);
// app.all('*', function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
//   res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
//   res.header("X-Powered-By", ' 3.2.1')
//   if (req.method == "OPTIONS") res.send(200); /*让options请求快速返回*/
//   else next();
// });

if (require.main === module) {
    app.listen(app.get('port'), function () {
        console.log('[%s] Express server listening on port %d',
            app.get('env').toUpperCase(), app.get('port'));
    });
}
