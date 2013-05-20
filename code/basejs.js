(function(self){
	"use strict";

	// Constructor
	var ClassName = function(props){
		this.hello = props.hello || "Hello";
	};

	// Prototype - instance methods
	ClassName.prototype.myMethod = function() {
	};

	ClassName.prototype.myVeryVeryLongMethod = function(argumentNumber1, argumentNumber2) {
		// body...
	};
	self.ClassName = ClassName;
})(window);