// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {

	var string = '';

	// Null
	if (obj === null) {
		return 'null';
	}
	//Undefined
	else if(typeof(obj) === 'undefined'){
		return undefined;
	}
	//functions
	else if(typeof(obj) === 'function'){
		return undefined;
	}
	// String
	else if(typeof(obj) !== 'object'){
		if(typeof(obj) ==='string'){
			return '"' + obj + '"'; 
		}
		return obj.toString();
	}

	// Array
	else if(obj.constructor === Array){
		string += '[';
		var firstitem = true;

		for(var i=0; i<obj.length; i++){
			if (firstitem) {
				firstitem = false;
			}
			else {
				string += ',';
			}

			if(typeof(obj[i]) === 'function' || typeof(obj[i]) ==='undefined'){
				string += null;
			}

			string += stringifyJSON(obj[i]);

		}

		string += ']';

	}

	// Object
	else if (typeof(obj) === 'object') {
		string += '{';
		var first = true;

		for (var key in obj) {
			if (typeof(obj[key]) !== 'undefined' && typeof(obj[key]) !== 'function') {
				// Handle commas
				if (first) {
					first = false;
				}
				else {
					string += ',';
				}

				// Key
				string += '"' + key + '":';

				string += stringifyJSON(obj[key]);
			}
		}

		string += '}';
	}

	return string;

};

