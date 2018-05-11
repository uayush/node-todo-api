var mongoose = require('mongoose');

var Todo = mongoose.model('Todo',{ //creates a collection(Table) Todo.

	text:{

		type:String,
		required :true,
		minlength : 1,
		trim : true
	},
	completed: {

		type: Boolean,
		default : false
	},
	completedAt: {

		type:Number,
		default : null
	}
});

module.exports = {Todo}; //es6
