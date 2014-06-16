function eachArgument(){
	var e,m=Array.prototype.slice.call(arguments);
	while(e=m.shift()){
		console.log("\n » :" + e);
	};
};
//
eachArgument(1,2,3);
