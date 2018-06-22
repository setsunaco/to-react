const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

app.use(express.static('public'));
app.use(express.static('public/js'));
app.use(express.static('public/css'));
app.use(express.static('public/img'));

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + 'index.html'));
});

console.log("listening on port 8080");
app.listen(8080);
