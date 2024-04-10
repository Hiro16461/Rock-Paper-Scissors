let playerScore = 0;
let computerScore = 0;

function playGame() {
    console.log(playRound(getPlayerChoice(), getComputerChoice()));
    console.log(playRound(getPlayerChoice(), getComputerChoice()));
    console.log(playRound(getPlayerChoice(), getComputerChoice()));
    console.log(playRound(getPlayerChoice(), getComputerChoice()));
    console.log(playRound(getPlayerChoice(), getComputerChoice()));

    if (playerScore > computerScore) {
        return `You Win! You're score${playerScore}. Computer score ${computerScore}`
    } else if (playerScore < computerScore) {
        return `You Lose! You're score${playerScore}. Computer score ${computerScore}`;
    } else {
        return `Draw! You're score${playerScore}. Computer score ${computerScore}`;
    }
}

function getTheRandomNumber() {
	return Math.floor(Math.random() * 3);
}

function getComputerChoice() {
	let computerChoice = getTheRandomNumber();
	switch (computerChoice) {
		case 0:
			return 'rock';
			break;
		case 1:
			return 'paper';
			break;
		case 2:
			return 'scissors';
			break;
	}
}

function getPlayerChoice() {
	let playerChoice = prompt('Your choice? rock or paper or scissors', 'rock');
	switch (playerChoice.toUpperCase()) {
		case 'ROCK':
			return 'rock';
			break;
		case 'PAPER':
			return 'paper';
			break;
		case 'SCISSORS':
			return 'scissors';
			break;
		default:
			return getPlayerChoice();
			break;
	}
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore++;
		return 'You Lose! Paper beats Rock';
	} else if (playerSelection === 'rock' && computerSelection === 'rock') {
		return 'You Draw! Rock evens Rock';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++;
		return 'You Win! Rock beats Scissors';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore++;
		return 'You Lose! Scissors beats Rock';
	} else if (playerSelection === 'paper' && computerSelection === 'paper') {
		return 'You Draw! Paper evens Paper';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++;
		return 'You Win! Paper beats Rock';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore++;
		return 'You Lose! Rock beats Scissors';
	} else if (
		playerSelection === 'scissors' &&
		computerSelection === 'scissors'
	) {
		return 'You Draw! Scissors evens Scissors';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++;
		return 'You Win! Scissors beats Paper';
	}
}
