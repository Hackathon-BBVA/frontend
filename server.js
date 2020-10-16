//import 'embed.js'
var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;

var path = require('path'); // dónde se usa path en este server?

var cors = require('cors')
app.use(cors())

app.use(express.static(__dirname)); //CERS:  + '/dist'

app.listen(port);

console.log('Proyecto lit-element con wrapper de NodeJS en puerto: ' + port);

app.get('/', function(req, res) {
    res.sendFile("index.html", { root: '.' })
})