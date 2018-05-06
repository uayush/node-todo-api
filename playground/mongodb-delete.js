//const MongoClient = require('mongodb').MongoClient;

const {MongoClient,ObjectID} = require('mongodb'); //-----ES6
//create a db
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {

	if(err){

		return console.log('not able to connect to the server');
	}

	
	console.log('connected to the MongoDB server');

db.collection('Users').findOneAndDelete({_id : ObjectID("5aed8312fe9d5b136e1fcb6f")}).then((result) => {

	console.log(result);
});



// db.collection('Users').deleteMany({text: 'walk the dog'}).then((result) => {

// 	console.log(result);

// });

//db.close();

});