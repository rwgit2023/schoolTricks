var express = require('express');
var app = express();  //  O express retorna um aplicativo

app.use(express.json())


pp.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header('Access-Control-Allow-Credentials', true);
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    next();
});
//    / -----------------------------------------------------------------------------------------------