var users = [];

//amount of users
var amount = prompt('Enter amount of users', 0);

//filling of array
for (var i=0; i < amount; i++){

	user = prompt('Enter your name', '');
	users.push(user);
	console.log(users[i]);
};

//checking of correct loggining
var userName = prompt("Enter your login, please.");

for (var i=0; i<users.length; i++){

	if (userName == users[i]){
		alert('Logining succesfull.')
		break;
	} else {
		alert("Login is not correct," + " " + userName + ".");
		break;
	};

};





