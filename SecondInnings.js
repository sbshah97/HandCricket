console.log("Welcome to the second innings of the cricket game Hand Cricket");

//User Batting second

for (var i= 0; userChoiceI2 == computerChoiceI2; ) {
	var userScore = 0;

	var userChoiceI2 = prompt ("What number would you like to choose?");
	var computerChoiceI2 = Math.floor(((Math.random)*6) + 1);

	if (userChoiceI2 == computerChoiceI2) {
		console.log("The User has been declared out");
	}  

	else {
		userScore += userChoiceI2;

		if(userScoreI2 > computerScoreI1) {
			console.log("The User has won the match");
		}
	}
}

if (userScoreI2 < computerScoreI1) {
	console.log("The User has lost the match");
}

//Computer Batting Second

for (var j = 0; computerChoiceI2 == userChoiceI2; ) {
	var computerScoreI2 = 0;

	var userChoiceI2 = prompt ("What number would you like to choose?");
	var computerChoiceI2 = Math.floor(((Math.random)*6) + 1);

	if (userChoiceI2 == computerChoiceI2) {
		console.log("The Computer has been declared out");
	}  

	else {
		computerScoreI2 += computerChoiceI2;
		if(computerScoreI2 > userScoreI1) {
			console.log("The user has lost the match");
		}
	}
}

if (userScoreI1 > computerScoreI2) {
	console.log("The user has won the match");
}
