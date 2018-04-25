
let express = require('express');
let cors = require('cors');
let app = express();
let states = require('./routes/states');
require('dotenv').config();
require('babel-register');

app.use(cors());

app.use('/states', states);

app.get('/*', function(req, res){
    // console.log(req);
    res.send({message: 'Hello There'});
});

let port = process.env.PORT || 5000;

console.log('host is ' + process.env.HOST);

app.listen(port, function(){
    console.log('listening in on port ' + port);
});