//const MongoClient = require('mongodb').MongoClient;

const {MongoClient,ObjectID} = require('mongodb'); //-----ES6
//create a db
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {

	if(err){

		return console.log('not able to connect to the server');
	}

	
	console.log('connected to the MongoDB server');

	db.collection('Users').findOneAndUpdate({_id : ObjectID("5aeec99298d9e1c5941ce46e")},{

		$set:{

			completed: false
		}
	},{

		returnOriginal : false

	}).then((result) => {

		console.log(result);
	});

//db.close();

});