let humanChoice;
let computerChoice;

function getHumanChoice() {
    humanChoice = prompt("Do you choose rock, paper or scissor?");
    console.log(`You chose ${humanChoice}`);
    return humanChoice;
}

function getComputerChoice(){
    let random = Math.random();

    if (random <0.33 ){computerChoice = "rock";
    }    else if (random >0.66) {computerChoice = "paper";
    }    else {computerChoice="scissor";}
         console.log(`The computer chose ${computerChoice}`);
         return computerChoice;
        }

let scoreComputer =0;
let scoreHuman =0;

function playRound(humanChoice, computerChoice) {
    let humanChoice= getHumanChoice()
    let computerChoice = getComputerChoice()

    if (humanChoice == computerChoice) {
        console.log("It's a tie!")
    } else if (humanChoice == "scissor" && computerChoice == "paper"){
        console.log("You won! Scissor beats paper")
        scoreHuman++;
    } else if (humanChoice == "scissor" && computerChoice == "rock") {
        console.log(`You lost! Rock beats scissor`)
        scoreComputer++;
    } else if (humanChoice == "rock" && computerChoice == "scissor") {
        console.log(`You won! Rock beats scissor`)
        scoreHuman++;
    } else if (humanChoice == "rock" && computerChoice == "paper") {
        console.log(`You lost! Paper beats rock`)
        scoreComputer++;
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        console.log(`You won! Paper beats rock`)
        scoreHuman++;
    } else if (humanChoice == "paper" && computerChoice == "scissor") {
        console.log(`You lost! Scissor beats paper`)
        scoreComputer++;
    } else {console.log(`You had a type error`)}

    console.log(`Score \n Computer: ${scoreComputer} \n You: ${scoreHuman}`
    )
}

function playGame(){
playRound()
playRound()
playRound()
playRound()
playRound()
};

playGame()