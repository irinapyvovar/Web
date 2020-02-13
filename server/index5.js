const express = require('express');
const app = express();

app.listen(80);

app.get('*/', function(req, res) {
    console.log("/post*")
    // отправляем ответ
    res.send(req.url + "akakakkakak" + req.headers)
})