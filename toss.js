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

console.log(userChoice + computerChoice);
