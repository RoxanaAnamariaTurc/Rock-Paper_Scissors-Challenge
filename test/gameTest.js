import { expect } from 'chai';
import Game from '../src/game.js';
import MockComputer from '../mockComputer.js';

describe(`Tests for game class`, () =>
{
    it(`Test 1 - should create an instance of Game class`, () =>
    {
        const game = new Game(new MockComputer('rock'));
        expect(game).to.have.an(`object`)
    })
    it(`Test 2 - function addName should save the player's name`, () =>
    {
        const game = new Game(new MockComputer('paper'));
        game.addName('Roxana');
        expect(game.player).to.contain('Roxana');
    })
    it(`Test 3 - function player choice should contain the choice selected by the player`, () =>
    {
        const game = new Game(new MockComputer('scissors'));
        game.playerChoice('rock');
        expect(game.choice).to.contain('rock');
    })

    it(`test 4 - if player chooses paper and computer chooses rock, should show message player won`, () =>
    {
        const game = new Game(new MockComputer('rock'));
        game.addName('Roxana');
        game.playerChoice('paper');
        let actual = `Congratulation Roxana!You Won`
        expect(actual).equal(game.result());
    })

    it(`Test 5 - should show a it's a draw message if computer choice is equal to players choice`, () =>
    {
        const game = new Game(new MockComputer('paper'));
        game.addName('Roxana');
        game.playerChoice('paper');
        let actual = `It's a draw! Choose again`;
        expect(actual).equal(game.result());
    })
    it(`Test 7 - should show a you lost message if computer chooses rock and player chooses scissors`, () =>
    {
        const game = new Game(new MockComputer('rock'));
        game.addName('Roxana');
        game.playerChoice('scissors');
        let actual = `You Lost!`;
        expect(actual).equal(game.result());
    })
})