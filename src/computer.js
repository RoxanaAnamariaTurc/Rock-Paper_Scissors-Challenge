class Computer
{
    choicesArray = ['rock', 'paper', 'scissors'];
    getChoice()
    {
        return this.choicesArray[Math.floor(Math.random() * this.choicesArray.length)];
    }
}

export default Computer;