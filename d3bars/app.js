const express = require('express')
const app = express()
var path = require("path");

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.use(express.static('public'))

express.static(path.join(__dirname + '/main.combined.js'))
express.static(path.join(__dirname + '/viz.js'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))