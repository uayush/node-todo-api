//const MongoClient = require('mongodb').MongoClient;

const {MongoClient,ObjectID} = require('mongodb'); //-----ES6
//create a db
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {

	if(err){

		return console.log('not able to connect to the server');
	}

	
	console.log('connected to the MongoDB server');

	db.collection('Users').find().toArray().then((docs) =>{

		console.log('todos');
		console.log(JSON.stringify(docs,undefined,2));
	},(err) => {

		console.log('unable to fetch todos', err);
	});


//db.close();

});