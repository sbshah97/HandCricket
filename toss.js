var userChoice1 = prompt ("Do you choose Odd OR Even?");

var userChoice = prompt("Choose  Your Number");
var computerChoice = Math.random();

if (computerChoice <= 0.17) 
{
	computerChoice = 1;
} 

else if(computerChoice <= 0.34 && computerChoice >= 0.18) 
{
	computerChoice = 2;
} 

else if(computerChoice <= 0.50 && computerChoice > 0.34)
{
	computerChoice = 3;
} 

else if(computerChoice <= 0.67 && computerChoice > 0.50)
{
	computerChoice = 4;
} 

else if(computerChoice <= 0.84 && computerChoice > 0.67)
{
	computerChoice = 5;
} 

else
{
	computerChoice = 6;
} 

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


