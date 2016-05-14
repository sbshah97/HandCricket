console.log("Hello, my name is Salman Shah the creator of this online version of the game hand cricket");

var userChoice1 = prompt ("Do you choose Odd OR Even?");

var userChoice = prompt("Choose Your Number");
var computerChoice = Math.floor(Math.random()*6 + 1);

console.log("Computer: " + computerChoice);

var tossChoice = userChoice + computerChoice;

console.log(tossChoice);

if (tossChoice % 2 == 0 && userChoice == "even")
{
    var usertossChoice = prompt("Do you want to Bat or Bowl?")  
    }

else if (tossChoice % 2 == 1 && userChoice == "odd")
{
    var usertossChoice = prompt("Do you want to bat or bowl?")  
    }

else 
{
    
    tossChoice1 = Math.random();
    if(tossChoice1 <= 0.50)
    {
    var usertossChoice = "bat";
        }
        
    else 
    {
        var usertosssChoice = "bowl"
        }
    
    }

console.log("You have to" + userTosschoice + "first");

if usertossChoice == "bat"
	var c = 1;
	
else 
	var c = 0;
