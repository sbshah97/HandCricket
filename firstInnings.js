console.log("Welcome to the first innings of the cricket game Hand Cricket");

//User Batting first

for (var i= 0; userChoiceI1 == computerChoiceI1; ) {
	var userScore = 0;

	var userChoiceI1 = prompt ("What number would you like to choose?");
	var computerChoiceI1 = Math.floor(((Math.random)*6) + 1);

	if (userChoiceI1 == computerChoiceI1) {
		console.log("The User has been declared out");
	}  

	else
		userScore += userChoiceI1;

}

//Computer Batting First

for (var j = 0; computerChoiceI1 == userChoiceI1; ) {
	var computerScore = 0;

	var userChoiceI1 = prompt ("What number would you like to choose?");
	var computerChoiceI1 = Math.floor(((Math.random)*6) + 1);

	if (userChoiceI1 == computerChoiceI1) {
		console.log("The Computer has been declared out");
	}  

	else {
		computerScore += computerChoiceI1;
	}
}

