function getComputerChoice(){ //Generates the Hand based of a random number
    randomNumber = Math.floor(Math.random() * 3);
    let compHand;
    switch(randomNumber){
        case 0:
            compHand = "Rock";
            break;
        case 1:
            compHand = "Paper";
            break;
        case 2:
            compHand = "Scissors";
            break;
    }
    return compHand;
}

function playRound(playerSelection){ //compares the picks and chooses a result
    let computerSelection = getComputerChoice();
    if(playerSelection == computerSelection){
        return"Draw!";
    }
    switch(playerSelection){
        case "Rock":
            if(computerSelection == "Paper"){
                computerWins++;
                roundsPlayed++;
                return "Computer has Paper.";
            }
            else{
                playerWins++;
                roundsPlayed++;
                return"Computer has Scissors.";
            }
            break;
        case "Paper":
            if(computerSelection == "Scissors"){
                computerWins++;
                roundsPlayed++;
                return"Computer has Scissors.";
            }
            else{
                playerWins++;
                roundsPlayed++;
                return"Computer has Rock.";
            }
            break;
        case "Scissors":
            if(computerSelection == "Rock"){
                computerWins++;
                roundsPlayed++;
                return"Computer has Rock.";
            }
            else{
                playerWins++;
                roundsPlayed++;
                return"Computer has Paper.";
            }
            break;
    }
}


let playerWins = 0;
let computerWins = 0;
let roundsPlayed = 0;
const but = document.querySelectorAll('button');
const result =document.querySelector('#result');
const score =document.querySelector('#score');
const winPicture = document.createElement('img');
const losePicture = document.createElement('img');
const finish = document.getElementById('finish');
const rockPicture = document.createElement('img');
const paperPicture = document.createElement('img');
const scissorsPicture = document.createElement('img');
const reset = document.createElement('button');

finish.appendChild(winPicture);
finish.appendChild(losePicture)
winPicture.style.display = 'none';
losePicture.style.display = 'none';
winPicture.src = "/img/Win.png";
losePicture.src = "/img/Lost.png";
rockPicture.src = "/img/Rock.png";
paperPicture.src = "/img/Paper.png";
scissorsPicture.src = "/img/Scissors.png";
reset.textContent = "Reset";




but.forEach(button => button.addEventListener('click', () => {
    if(roundsPlayed == 5){
        (computerWins< playerWins) ? winPicture.style.display = 'block': losePicture.style.display = 'block';
        finish.appendChild(reset);
        return;
    }
    result.textContent = playRound(button.id);
    score.textContent = "Player " + playerWins + " : " + computerWins + " Computer";
}));

reset.addEventListener('click', () => {
    playerWins = 0;
    computerWins = 0;
    roundsPlayed = 0;
    score.textContent = "Player " + playerWins + " : " + computerWins + " Computer";
    winPicture.style.display = 'none';
    losePicture.style.display = 'none';
    result.textContent = "";
});
