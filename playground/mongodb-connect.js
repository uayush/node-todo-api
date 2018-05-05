const MongoClient = require('mongodb').MongoClient;

//create a db
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {

	if(err){

		return console.log('not able to connect to the server');
	}

	
	console.log('connected to the MongoDB server');

	// db.collection('Todos').insertOne({

	// 	text:'something to do',
	// 	completed: false

	// }, (err,result)  => {

	// 	if(err){
	// 		return console.log('unable to create todo database', err);
	// 	}

	// 	console.log(JSON.stringify(result.ops,undefined,2));

	// });
//create a collection
db.collection('Users').insertOne({

	name:'thor',
	age : 45 ,
	location : 'asgard'

}, (err,result)  => {

		if(err){
			return console.log('unable to create todo database', err);
		}

		console.log(JSON.stringify(result.ops,undefined,2));

	}); 


db.close();

});