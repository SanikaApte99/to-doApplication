const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

app.use(express.static(__dirname));

app.get('/', function (req, res) {
    res.sendFile('/index.html', { root: path.join(__dirname) });
});

app.listen(PORT);
console.log("to-do app is live:" + PORT);
