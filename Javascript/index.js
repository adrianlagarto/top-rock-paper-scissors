function game(){}
let round = 1;
let playerSelection = "";
let computerSelection = "";
let computerScore = 0;
let playerScore = 0;

function getPlayerChoice(){
  let playerChoice = prompt(`(Round ${round})  Computer: ${computerScore} Player: ${playerScore} rock, paper, or scissors`)
  if(playerChoice===null){return getPlayerChoice();}
  playerSelection = playerChoice.toLowerCase();
  return playerSelection.toString();
  }
      
function getComputerChoice(){   //return rock, paper, scissors from a computer
  
  const randomGenerator = Math.floor(Math.random()*100);
    if(randomGenerator<=33){
      return computerSelection = "rock";
    }
    if(randomGenerator<=66&&33){
      
      return computerSelection = "paper";
    }
    if(randomGenerator<=99&&66){
      
      return computerSelection = "scissors"
    }
}

function playRound(playerSelection, computerSelection){  //this function is a round that see the result of the game/round and it should return "You Lose! Paper beats Rock"
  //i need to compare every scenario possible, return a ++to a variable and do a recursion until variable === 5
  const player = playerSelection;
  const computer = computerSelection;

  if(player === computer){
    return 'its a tie'
  }
  
  console.log(player, computer)
  
  

  }
 

console.log(getPlayerChoice());
console.log(getComputerChoice());
console.log(playRound(playerSelection, computerSelection));

