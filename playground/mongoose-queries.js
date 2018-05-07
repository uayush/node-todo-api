const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/DB/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

id = '5aeefcf1762b2b9c1833f3b6';

// if (!ObjectID.isValid(id)) {

// return console.log('id is not valid');

// }

// Todo.find({

// 	_id : id
// }).then((todos) => {

// 	console.log('Todos' , todos);
// 	return console.log('this is find method');
// 	console.log('testing return behaviour');

// });

// Todo.findOne({

// 	completed : false
// }).then((todo) => {

// 	console.log('Todos' , todo);
// });

User.findById(id).then((user) =>{
	if(!user){

		console.log('user not found');
	}
	console.log('user returned', user);
}).catch((e) => { console.log('there is an error' ,e)});