let names = ['Alice','Bob','Marry','Joe','Hilary','Stevia','Dylan'];

let prepender = function(name){
	return 'My name is: '+name;
};

//your code here

const newArray = names.map(name => `My name is: ${name}`);
// console.log(names.map(prepender));
console.log(newArray);