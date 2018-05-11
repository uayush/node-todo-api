var mongoose = require('mongoose');

var User = mongoose.model('User',{ //Creates a collection User

	email:{                    //Document creation

		required : true,
		minlength : 1,
		trim : true,
		type: String

	}
});

module.exports = {User};
