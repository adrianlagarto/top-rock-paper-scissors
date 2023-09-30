function game(){

let round = 0;
let playerSelection = "";
let computerSelection = "";
let computerScore = 0;
let playerScore = 0;
let winOrLose = "";

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
    round += 1;
    return winOrLose = `Player:${playerScore} Computer:${computerScore} its a tie`;
  }

  if(player === 'rock' && computer === 'paper'){
    computerScore = computerScore + 1;round += 1;
    return winOrLose = `(Round${round})Player: ${playerScore} Computer: ${computerScore} you lose`;
}
  if(player === 'rock' && computer === 'scissors'){
    playerScore = playerScore + 1; round += 1;
    return winOrLose = `(Round${round})Player: ${playerScore} Computer: ${computerScore} you win`;
}
  if(player === 'paper' && computer === 'rock'){
    playerScore = playerScore + 1; round += 1;
    return winOrLose = `(Round${round})Player:${playerScore} Computer:${computerScore} you win`; 
}
  if(player === 'paper' && computer === 'scissors'){
    computerScore = computerScore + 1;round += 1;
    return winOrLose = `(Round${round})Player:${playerScore} Computer:${computerScore} you lose`;
}
  if(player === 'scissors' && computer === 'paper'){
    playerScore = playerScore + 1; round += 1;
    return winOrLose = `(Round${round})Player:${playerScore} Computer:${computerScore} you win`; 
}
  if(player === scissors && computer === rock){
    computerScore = computer + 1;round += 1;
    return winOrLose = `(Round${round})Player:${playerScore} Computer:${computerScore} you lose`; 
}
  
  console.log(`Player: ${player}`,`Computer: ${computer}`)
  
} 

  function playFiveGames(){
    if(round === 6){
      if(playerScore > computerScore){
        return "you win wooooo";
      }return "you lose boooo"
    }
    console.log(getPlayerChoice());
    console.log(getComputerChoice());
    console.log(playRound(playerSelection, computerSelection));
    return playFiveGames();
  }
 
  console.log(playFiveGames());

}


game()

