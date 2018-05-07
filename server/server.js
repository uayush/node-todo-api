var express = require('express');
var bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');
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
});
app.get('/todos', (req,res) => {

	todo.find().then((todos) =>{

		res.send({todos});
	})
}, (e) =>{

	res.status(400).send(e);

});

app.get('/todos/:id',(req,res) =>{

		var id = req.params.id;
		 if (!ObjectID.isValid(id)) {


		 		return res.status(404).send();
		 }

	Todo.findById(id).then((todo) => {

		if(!todo){

			res.status(404).send();
		}
		res.send({todo});

	}).catch((e) => {
		res.status(404).send();
	})



});




app.listen(3000,() => {

console.log('started on port 3000');

}) ;

module.exports = {app}; //es6