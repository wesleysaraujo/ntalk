var express = require('express')
 ,  load = require('express-load')
 ,  session = require('express-session')
 ,  cookieParser = require('cookie-parser')
 ,  json = require('express-json')
 ,  bodyParser = require('body-parser')
 ,  methodOverride = require('method-override')
 ,  app = express();

app.set('views', __dirname+'/views');
app.set('view engine', 'ejs');
app.use(cookieParser('ntalk'));
app.use(session());
app.use(json());
app.use(bodyParser.urlencoded());
app.use(methodOverride());
app.use(express.static(__dirname + '/public'));

load('models')
    .then('controllers')
    .then('routes')
    .into(app);

app.listen(3000, function(){
    console.log('Ntalk no ar');
});