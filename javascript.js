let humanChoice;
let computerChoice;
let result;
let roundsPlayed = 0
let roundsLeft = 5

const intro = document.createElement("h3")
intro.textContent = `Welcome to Rock, Paper, Scissors! You can play 5 times: `
intro.style.color = "grey"
intro.style.fontWeight ="300"
document.body.appendChild(intro)

const roundsToPlay = document.createElement("div")
roundsToPlay.textContent = `You have ${roundsLeft} rounds left `
document.body.appendChild(roundsToPlay)


const buttons = document.createElement("div")
buttons.style.display = "flex";
buttons.style.justifyContent = "space-around"
buttons.style.alignItems = "center"

const button1 = document.createElement("button")
button1.textContent = "Rock"
button1.addEventListener("click", () => {
    humanChoice = "rock"
    playRound();
})

const button2 = document.createElement("button")
button2.textContent = "Paper"
button2.addEventListener("click", () => {
    humanChoice = "paper"
    playRound();})

const button3 = document.createElement("button")
button3.textContent= "Scissor"
button3.addEventListener("click", () => {
    humanChoice = "scissor"
    playRound();})

buttons.append(button1, button2, button3)
document.body.appendChild(buttons)

const yourChoice = document.createElement("div")
document.body.appendChild(yourChoice)

var compChoice = document.createElement("div")
compChoice.textContent = computerChoice
document.body.appendChild(compChoice)

const outcome = document.createElement("div")
document.body.appendChild(outcome)

const score = document.createElement("div")
score.setAttribute('style', 'white-space: pre;');
document.body.appendChild(score)

const endResult = document.createElement("div")
document.body.appendChild(endResult)

function getHumanChoice() {
    yourChoice.textContent = `You chose ${humanChoice}`;
    return humanChoice;
}

function getComputerChoice(){
    let random = Math.random();

    if (random <0.33 ){computerChoice = "rock";
    }    else if (random >0.66) {computerChoice = "paper";
    }    else {computerChoice="scissor";}
         compChoice.textContent  = `The computer chose ${computerChoice}`;
         return computerChoice;
        }

let scoreComputer =0;
let scoreHuman =0;


    function playRound(humanChoice, computerChoice) {
        humanChoice= getHumanChoice()

        computerChoice = getComputerChoice()

        roundsLeft = 5- roundsPlayed
 
    score.textContent = ``
        if (humanChoice == computerChoice) {
            outcome.textContent = "It's a tie!"
        } else if (humanChoice == "scissor" && computerChoice == "paper"){
            outcome.textContent = "You won! Scissor beats paper"
            scoreHuman++;
        } else if (humanChoice == "scissor" && computerChoice == "rock") {
            outcome.textContent = `You lost! Rock beats scissor`
            scoreComputer++;
        } else if (humanChoice == "rock" && computerChoice == "scissor") {
            outcome.textContent = `You won! Rock beats scissor`
            scoreHuman++;
        } else if (humanChoice == "rock" && computerChoice == "paper") {
            outcome.textContent = `You lost! Paper beats rock`
            scoreComputer++;
        } else if (humanChoice == "paper" && computerChoice == "rock") {
            outcome.textContent =`You won! Paper beats rock`
            scoreHuman++;
        } else if (humanChoice == "paper" && computerChoice == "scissor") {
            outcome.textContent = `You lost! Scissor beats paper`
            scoreComputer++;
        } else {outcome.textContent =`You had a type error`}
    
        roundsPlayed++
        roundsToPlay.textContent = `You have ${roundsLeft} rounds left `
        
        if (roundsPlayed===5) {
            score.textContent = `\r\n      Score \r\n \r\nComputer: ${scoreComputer} \r\nYou: ${scoreHuman}`
            if (scoreComputer>scoreHuman) {
                endResult.textContent = `You lost!`}
                else if (scoreComputer<scoreHuman) {
                    endResult.textContent = `You won!`
                }
                else if (scoreComputer===scoreHuman) {
                    endResult.textContent= `It's a tie!`
                }
                roundsPlayed = 0
                roundsLeft =0
            }
            return roundsPlayed
        }

