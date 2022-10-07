function getComputerChoice(){ //Generates the Hand based of a random number
    randomNumber = Math.floor(Math.random() * 3);
    let compHand;
    switch(randomNumber){
        case 0:
            compHand = "rock";
            break;
        case 1:
            compHand = "paper";
            break;
        case 2:
            compHand = "scissors";
            break;
    }
    return compHand;
}

function playRound(){ //compares the picks and chooses a result
    let playerSelection = playerInput();
    let computerSelection = getComputerChoice();
    if(playerSelection == computerSelection)
        return 2;
    switch(playerSelection){
        case "rock":
            if(computerSelection == "paper"){
                console.log("Computer has Paper. You lost!");
                return 1;
            }
            else{
                console.log("Computer has Scissors. You Won!");
                return 0;
            }
            break;
        case "paper":
            if(computerSelection == "scissors"){
                console.log("Computer has Scissors. You lost!");
                return 1;
            }
            else{
                console.log("Computer has Rock. You Won!");
                return 0;
            }
            break;
        case "scissors":
            if(computerSelection == "rock"){
                console.log("Computer has Rock. You lost!");
                return 1;
            }
            else{
                console.log("Computer has Paper. You Won!");
                return 0;
            }
            break;
    }
}

function playerInput(){ //takes the userinput and fromats it
    let inputText;
    while(1){
        inputText = prompt("Input?");
        if(inputText != null){
            let temp = inputText.trim();
            inputText = temp.toLowerCase();
            if(inputText == "rock" || inputText == "paper" || inputText == "scissors"){
                return inputText;
            }else{
                console.log("wrong Input! Try again.");
            }
        }

    }
}

function game(){ //logic to play 5 rounds and posts the result
    let playerScore = 0;
    let computerScore = 0;
    console.log("Game begins!")
    while(playerScore<5 && computerScore<5){
        let ergebnis = playRound();
        switch(ergebnis){
            case 0: 
                playerScore++;
                break;
            case 1: 
                computerScore++;
                break;
            case 2:
                console.log("Same Picked. Draw!");
                break;
        }

        console.log(playerScore + " Player vs Computer " + computerScore);
    }
    let winner = (playerScore == 5) ? "Player won!" : "Player lost!";
    console.log(winner);

}

game();
