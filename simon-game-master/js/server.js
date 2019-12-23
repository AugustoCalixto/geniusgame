var express = require('express');
var app = express();
var path = require('path');








app.get('/', function(req, res) {
    app.use(express.static('/home/pi/Documents/git_rasp/geniusgame/simon-game-master'));
    res.sendFile(path.join('/home/pi/Documents/git_rasp/geniusgame/simon-game-master/index.html'));
});

app.listen(8080, '127.0.0.1');