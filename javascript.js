

// plan:
// -create a function that returns rock / paper or scissors randomly for the computer
// -create a function for human input 
// -create a function that saves the human input
// -create make sure that the two answers are compared
// -create a message if you won 

let humanChoice;
let computerChoice;

function getHumanChoice() {
    humanChoice = prompt("Do you choose rock, paper or scissor?");
    console.log(`You chose ${humanChoice}`);
    return humanChoice;
}

getHumanChoice();

function getComputerChoice(){
    let random = Math.random();

    if (random <0.33 ){computerChoice = "rock";
    }    else if (random >0.66) {computerChoice = "paper";
    }    else {computerChoice="scissor";}
         console.log(`The computer chose ${computerChoice}`);
         return computerChoice;
        }
getComputerChoice();

let scoreComputer =0;
let scoreHuman =0;


function declareOutcome() {
    if (humanChoice == computerChoice) {
        console.log("It's a tie!")
    } else if (humanChoice == "scissor" && computerChoice == "paper"){
        console.log("You won!")
        scoreHuman++;
    } else if (humanChoice == "scissor" && computerChoice == "rock") {
        console.log(`You lost!`)
        scoreComputer++;
    } else if (humanChoice == "rock" && computerChoice == "scissor") {
        console.log(`You won!`)
        scoreHuman++;
    } else if (humanChoice == "rock" && computerChoice == "paper") {
        console.log(`You lost!`)
        scoreComputer++;
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        console.log(`You won!`)
        scoreHuman++;
    } else if (humanChoice == "paper" && computerChoice == "scissor") {
        console.log(`You lost!`)
        scoreComputer++;
    } else {console.log(`You had a type error`)}
}

declareOutcome();

function showScore(){
    console.log(`Score \n Computer: ${scoreComputer} \n You: ${scoreHuman}`
    )
}

showScore();

function playRound(humanChoice, computerChoice){

}