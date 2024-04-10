const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const para = document.querySelector('#para');
const resultPara = document.querySelector('#result');
const playerScores = document.querySelector('#player-score');
const computerScores = document.querySelector('#computer-score');

rockBtn.addEventListener('click', (e) => {
	para.textContent = playRound('rock', getComputerChoice());
	playerScores.textContent = playerScore;
	computerScores.textContent = computerScore;
	resultPara.textContent = result();
});

paperBtn.addEventListener('click', (e) => {
	para.textContent = playRound('paper', getComputerChoice());
	playerScores.textContent = playerScore;
	computerScores.textContent = computerScore;
	resultPara.textContent = result();
});

scissorsBtn.addEventListener('click', (e) => {
	para.textContent = playRound('scissors', getComputerChoice());
	playerScores.textContent = playerScore;
	computerScores.textContent = computerScore;
	resultPara.textContent = result();
});

let playerScore = 0;
let computerScore = 0;

function result() {
	if (playerScore === 5) {
		playerScore = 0;
		computerScore = 0;
		return `You Win! You reached 5 points!`;
	} else if (computerScore === 5) {
		playerScore = 0;
		computerScore = 0;
		return `You Lose! Computer reached 5 points!`;
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
