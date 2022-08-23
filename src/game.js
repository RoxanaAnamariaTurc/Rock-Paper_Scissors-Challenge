// import Computer from "./computer";
// import MockComputer from "../mockComputer";
class Game
{
    choice = '';
    choicesArray = ['rock', 'paper', 'scissors'];
    constructor(computer)
    {
        this.player = '';
        this.computer = computer;
    }

    addName(name)
    {
        this.player = name
    }

    playerChoice(choice)
    {
        this.choice = choice;

    }
    computerChoice()
    {
        return this.computer.getChoice();
    }

    result()
    {
        let winningMessage = `Congratulation ${this.player}!You Won`;
        let computerChoice = this.computerChoice();
        if (this.choice === computerChoice)
        {
            return `It's a draw! Choose again`


        } else if (this.choice === this.choicesArray[0] && computerChoice === this.choicesArray[2])
        {
            return winningMessage;
        } else if (this.choice === this.choicesArray[2] && computerChoice === this.choicesArray[1])
        {
            return winningMessage;
        } else if (this.choice === this.choicesArray[1] && computerChoice == this.choicesArray[0])
        {
            return winningMessage;
        } else
        {
            return `You Lost!`
        }

    }
}

export default Game;