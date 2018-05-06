var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./DB/mongoose'); //es6 destructuring
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos',(req,res) => {

var todo = new Todo ({
 text : req.body.text
});
todo.save().then((doc) => {

	res.send(doc);
}, (e) => {

	res.status(400).send(e);
});


var todo1 = new Todo ({
 text : req.body.text
});
todo1.save().then((doc) => {

	res.send(doc);
}, (e) => {

	res.status(400).send(e);
});

var todo2 = new Todo ({
 text : req.body.text
});
todo2.save().then((doc) => {

	res.send(doc);
}, (e) => {

	res.status(400).send(e);
});
});




app.listen(3000,() => {

console.log('started on port 3000');

}) ;