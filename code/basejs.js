(function(self){
	"use strict";
	var ClassName = function(){};
	ClassName.prototype.myMethod = function(props) {
		this.hello = props.hello || "Hello";
	};

	ClassName.prototype.myVeryVeryLongMethod = function (argumentNumber1, argumentNumber2) {
		// body...
	};
	self.ClassName = ClassName;
})(window);