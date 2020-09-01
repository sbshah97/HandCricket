var OE = -1;			//0 odd & 1 even
var inp
var callback;
var userBats = -1;	//if user bats(1) or bowls(0) in first innings
var userScore = 0, cpuScore = 0;

function S(id) {
	return document.getElementById(id);
}

function set_OE(i) {
	OE = i;
	console.log("User chose " + ((i) ? "Even" : "Odd"));
	S("OddEven").style.display = "none";
	get_inp("do_toss");
}

function get_OE() {
	S("OddEven").style.display = "block";
}

function set_inp(i) {
	inp = i;
	console.log("User chose " + i);
	S("inp").style.display = "none";
	window[callback](i);
	//eval(callback+"(i)");
}

function get_inp(_callback) {
	S("inp").style.display = "block";
	callback = _callback;
}

function get_cpu_inp() {
	var c = Math.floor(Math.random() * 6 + 1);
	console.log("Cpu chose : " + c);
	return c;
}

function set_userBats(i) {
	userBats = i;
	console.log("User chose to " + ((userBats) ? "Bat" : "Bowl") + " first");
	S("ask_user_bat").style.display = "none";
	if (userBats)
		userBat();
	else
		cpuBat();
	S("score_board").style.display = "block";
	S("choice_board").style.display = "block";
}

function askUserBat() {
	S("ask_user_bat").style.display = "block";
}

function do_toss(i) {
	var userToss = i;
	var cpuToss = get_cpu_inp();
	var toss = userToss + cpuToss;
	if ((toss % 2 == 0 && OE) || (toss % 2 && !OE))
		askUserBat();
	else {
		userBats = 0;	//cpu bats
		console.log("User has to Bowl first");
		S("score_board").style.display = "block";
		S("choice_board").style.display = "block";
		alert("You have lost the toss. You have to bowl first")
		cpuBat();
	}
}

function cpuBat() {
	get_inp("addCpuScore");
}

function userBat() {
	get_inp("addUserScore");
}

function addUserScore(i) {
	cpu_inp = get_cpu_inp();
	S("user_choice").innerHTML = i;
	S("cpu_choice").innerHTML = cpu_inp;
	if (cpu_inp == i) {
		console.log("User has been declared out");
		alert("You have been dismissed for " + userScore + " runs");
		if (userBats == 1) {
			cpuBat();
		} else {
			//match over
			if (userScore >= cpuScore) {
				console.log("User won the match");
				alert("You won!!!");
			} else {
				console.log("User lost the match");
				alert("You lost!!!");
			}
		}
	} else {
		userScore += i;
		console.log("User Score : " + userScore)
		S("user_score").innerHTML = userScore;
		if (userBats == 0 && userScore >= cpuScore) {
			console.log("User won the match");
			alert("You won!!!");
		} else
			get_inp("addUserScore");
	}
}

function addCpuScore(i) {
	cpu_inp = get_cpu_inp();
	S("user_choice").innerHTML = i;
	S("cpu_choice").innerHTML = cpu_inp;
	if (cpu_inp == i) {
		console.log("Cpu has been dismissed for " + cpuScore + " runs");
		alert("CPU has been dismissed for " + cpuScore + " runs")
		if (userBats == 0) {
			userBat();
		} else {
			//match over
			if (userScore >= cpuScore) {
				console.log("User won the match");
				alert("You won the match by " + parseInt(userScore - cpuScore) + " runs");
			} else {
				console.log("User lost the match");
				alert("You lost the match by" + parseInt(cpuScore - userScore) + " runs");
			}
		}
	} else {
		cpuScore += cpu_inp;
		console.log("Cpu Score : " + cpuScore);
		S("cpu_score").innerHTML = cpuScore;
		if (userBats == 1 && userScore < cpuScore) {
			console.log("User lost the match");
			alert("You lost!!!");
		} else
			get_inp("addCpuScore");
	}
}

get_OE();
