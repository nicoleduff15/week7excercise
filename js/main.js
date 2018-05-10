var myH1 = document.getElementById("myH1");
	myH1.innerText = "Welcome to this page!";
var myNewH1 = document.getElementById("myNewH1");

function getInfo() {
	var userInput = document.getElementById("userInput").value;
	console.log(userInput);
		myNewH1.innerText = userInput;
}


var stringArray = ["this", "is", "a", "string", "array"];

for(var i = 0; i < stringArray.length; i++) {
	console.log(stringArray[i]);
}


var myObj = {
	name: "Nicole",
	age: 25,
	isMale: false
};

console.log(myObj.name);
console.log(myObj.age);
console.log(myObj.isMale);

var heading1 = document.getElementById("unique1");
var heading2 = document.getElementById("unique2");
var heading3 = document.getElementById("unique3");

	heading1.innerText = myObj.name;
	heading2.innerText = myObj.age;
	heading3.innerText = myObj.isMale;



var myArray = [
		{
			name: "50 First Dates",
			actor: "Andam Sandler",
			genre: "Comedy"
		},
		{
			name: "Frozen",
			actor: "Kristen Bell",
			genre: "Family Film"
		},
		{
			name: "Step Brothers",
			actor: "Will Ferrell",
			genre: "Comedy"
		}
];

for(var i = 0; i < myArray.length; i++) {
	console.log(myArray[i].name);
	console.log(myArray[i].actor);
	console.log(myArray[i].genre);
}


document.body.style.color = "red";
